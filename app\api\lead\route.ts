import { NextResponse } from 'next/server'
import { z } from 'zod'

const LeadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional().default(''),
  message: z.string().min(10, 'Tell us a bit more')
})

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
        from: 'BrandHive <leads@mail.brandhive.uk>',
        to: ['hello@brandhive.uk'],
        subject: `New lead from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`
      })
    } else {
      // Fallback: log to server console
      console.log('Lead:', data)
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}

