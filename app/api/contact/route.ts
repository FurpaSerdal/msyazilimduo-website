import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  await resend.emails.send({
    from: `Web Site <${body.email}>`,
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
