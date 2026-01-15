import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if key exists to avoid build-time failures
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  if (!resend || !process.env.MAIL_TO) {
    return NextResponse.json(
      { ok: false, message: "Email service not configured" },
      { status: 503 }
    );
  }

  const body = await req.json();

  try {
    await resend.emails.send({
      from: "Web Site <onboarding@resend.dev>",
      to: process.env.MAIL_TO,
      subject: "Yeni Proje Talebi 🚀",
      html: `
        <b>İsim:</b> ${body.name}<br/>
        <b>Email:</b> ${body.email}<br/>
        <b>Mesaj:</b><br/>${body.message}
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
