import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const recipients = process.env.RESEND_RECIPIENTS?.split(',') ?? []

export async function POST(request: NextRequest) {
  const { email, techEmail, orgName } = await request.json()

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: recipients,
    subject: 'Ny intresseanmälan till Eneo',
    html: `<p>Ny intresseanmälan till Eneo från ${email}!</p><p>Kontaktperson: ${email}</p><p>Teknisk kontaktperson: ${techEmail}</p><p>Organisationsnamn: ${orgName}</p>`
  });

  return NextResponse.json({}, { status: 200 })
}
