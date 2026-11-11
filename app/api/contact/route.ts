import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if key exists to avoid build-time failures
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanField(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(req: Request) {
  if (!resend || !process.env.MAIL_TO) {
    return NextResponse.json(
      { ok: false, message: "Email service not configured" },
      { status: 503 }
    );
  }

  let rawBody: Record<string, unknown>;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Geçersiz istek formatı" },
      { status: 400 }
    );
  }

  const name = cleanField(rawBody.name, 120);
  const email = cleanField(rawBody.email, 200);
  const phone = cleanField(rawBody.phone, 40);
  const company = cleanField(rawBody.company, 150);
  const erpSystem = cleanField(rawBody.erpSystem, 80);
  const location = cleanField(rawBody.location, 100);
  const source = cleanField(rawBody.source, 100);
  const message = cleanField(rawBody.message, 4000);

  if (!name || !email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Lütfen geçerli ad ve e-posta adresi girin" },
      { status: 400 }
    );
  }

  if (!message && !erpSystem) {
    return NextResponse.json(
      { ok: false, message: "Lütfen mesaj veya proje detayı girin" },
      { status: 400 }
    );
  }

  const optionalRows = [
    phone ? `<b>Telefon:</b> ${escapeHtml(phone)}<br/>` : "",
    company ? `<b>Şirket / Proje:</b> ${escapeHtml(company)}<br/>` : "",
    erpSystem ? `<b>ERP Sistemi:</b> ${escapeHtml(erpSystem)}<br/>` : "",
    location ? `<b>Konum:</b> ${escapeHtml(location)}<br/>` : "",
    source ? `<b>Kaynak:</b> ${escapeHtml(source)}<br/>` : "",
  ]
    .filter(Boolean)
    .join("\n        ");

  const formattedMessage = message
    ? escapeHtml(message).replace(/\n/g, "<br/>")
    : "<i>Mesaj belirtilmedi</i>";

  try {
    await resend.emails.send({
      from: "Web Site <onboarding@resend.dev>",
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Yeni Proje Talebi (${escapeHtml(name)})`,
      html: `
        <b>İsim:</b> ${escapeHtml(name)}<br/>
        <b>Email:</b> ${escapeHtml(email)}<br/>
        ${optionalRows}
        <b>Mesaj:</b><br/>${formattedMessage}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { ok: false, message: "Email gönderilemedi" },
      { status: 500 }
    );
  }
}
