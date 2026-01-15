import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ ok: false, message: "Email service not configured" });
}
