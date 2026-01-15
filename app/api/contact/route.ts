import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const body = await req.json();

  await resend.emails.send({
    from: "Web Site <onboarding@resend.dev>",
    to: process.env.MAIL_TO!,
    subject: "Yeni Proje Talebi 🚀",
    html: `
      <b>İsim:</b> ${body.name}<br/>
      <b>Email:</b> ${body.email}<br/>
      <b>Mesaj:</b><br/>${body.message}
    `,
  });

  return NextResponse.json({ ok: true });
}
