export type ContactValues = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()

  if (!name) errors.name = "Please enter your name."
  else if (name.length < 2) errors.name = "Name should be at least 2 characters."

  if (!email) errors.email = "Please enter your email."
  else if (!emailPattern.test(email)) errors.email = "Enter a valid email address."

  if (!subject) errors.subject = "Please add a subject."
  else if (subject.length < 3) errors.subject = "Subject should be at least 3 characters."

  if (!message) errors.message = "Please write a message."
  else if (message.length < 12) errors.message = "Message should be at least 12 characters."
  else if (message.length > 2000) errors.message = "Please keep the message under 2000 characters."

  return errors
}

export function buildMailto(ownerEmail: string, values: ContactValues) {
  const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
  const params = new URLSearchParams({
    subject: values.subject.trim(),
    body,
  })
  return `mailto:${ownerEmail}?${params.toString()}`
}
