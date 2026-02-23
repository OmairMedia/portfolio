import { z } from 'zod'

const contactPayloadSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  details: z.string().min(15).max(2000),
})

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event)
  const payload = await readBody(event)
  const validatedPayload = contactPayloadSchema.safeParse(payload)

  if (!validatedPayload.success) {
    setResponseStatus(event, 400)
    return {
      ok: false,
      message: 'Invalid contact form payload.',
    }
  }

  const resendApiKey = runtimeConfig.resendApiKey
  const contactFromEmail = runtimeConfig.contactFromEmail
  const contactToEmail = runtimeConfig.contactToEmail

  if (!resendApiKey || !contactFromEmail || !contactToEmail) {
    setResponseStatus(event, 500)
    return {
      ok: false,
      message: 'Contact service is not configured.',
    }
  }

  const { name, email, details } = validatedPayload.data

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        details,
      ].join('\n'),
    }),
  })

  if (!emailResponse.ok) {
    setResponseStatus(event, 502)
    return {
      ok: false,
      message: 'Unable to deliver your message right now.',
    }
  }

  return {
    ok: true,
    message: 'Message sent successfully.',
  }
})
