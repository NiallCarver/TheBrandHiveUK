import { NextResponse } from 'next/server'
import { z } from 'zod'

const LeadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional().default(''),
  message: z.string().min(10, 'Tell us a bit more')
})

const TO_EMAIL = process.env.LEAD_TO_EMAIL || 'info@thebrandhive.uk'
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || 'Brand Hive UK <forms@thebrandhive.uk>'

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = LeadSchema.safeParse(json)
    if (!parsed.success) {
      const error = parsed.error.flatten().fieldErrors
      return NextResponse.json({ ok: false, error }, { status: 400 })
    }

    const data = parsed.data

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.company ? `Company: ${data.company}` : null,
          '',
          'Message:',
          data.message
        ].filter(Boolean).join('\n')
      })
    } else {
      // Fallback when no API key configured (local dev or pre-launch)
      console.log('[lead]', data)
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}
