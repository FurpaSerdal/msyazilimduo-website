import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Email service is not configured in this deployment
  // Please configure RESEND_API_KEY in environment variables
  return NextResponse.json(
    { error: "Email service temporarily unavailable" },
    { status: 503 }
  );
}
