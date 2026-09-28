import { Mail } from "lucide-react"
import { useId, useState } from "react"
import type { FormEvent } from "react"
import { personal } from "../data/personal"
import { buildMailto, validateContact, type ContactErrors, type ContactValues } from "../utils/contact"
import { Button } from "./Button"
import { GithubIcon, LinkedinIcon } from "./Icons"
import { Reveal } from "./Reveal"
import { Section } from "./Section"

const emptyValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export function Contact() {
  const formId = useId()
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<"idle" | "success" | "unconfigured">("idle")

  const update = (key: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    setStatus("idle")
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle")
      return
    }
    if (!personal.email) {
      setStatus("unconfigured")
      return
    }
    window.location.href = buildMailto(personal.email, values)
    setStatus("success")
  }

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            07 <span className="px-2 text-faint">/</span> Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl md:leading-[0.95]">
            Have an Idea? Let&apos;s Build Something Meaningful.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            I&apos;m always interested in connecting with developers, recruiters, founders, and people working on
            innovative technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {personal.email ? (
              <Button href={`mailto:${personal.email}`}>
                <Mail size={16} aria-hidden="true" />
                Email me
              </Button>
            ) : (
              <Button href="#contact-form">
                <Mail size={16} aria-hidden="true" />
                Write a message
              </Button>
            )}
            <Button href={personal.linkedin} external variant="secondary">
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Button>
            <Button href={personal.github} external variant="secondary">
              <GithubIcon className="size-4" />
              GitHub
            </Button>
          </div>
          {personal.email ? (
            <p className="mt-4 text-sm text-muted">
              <a className="text-accent" href={`mailto:${personal.email}`}>
                {personal.email}
              </a>
            </p>
          ) : (
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              A public email address is not listed yet. LinkedIn and GitHub are the direct ways to reach me until it is.
            </p>
          )}
        </Reveal>

        <Reveal>
          <form
            id="contact-form"
            onSubmit={onSubmit}
            noValidate
            className="scroll-mt-28 rounded-[1.6rem] border border-line bg-surface p-5 sm:p-7"
          >
            <p className="mb-4 text-sm text-muted">All fields are required.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id={`${formId}-name`}
                label="Name"
                autoComplete="name"
                value={values.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
              />
              <Field
                id={`${formId}-email`}
                label="Email"
                type="email"
                autoComplete="email"
                value={values.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
              />
            </div>
            <div className="mt-4">
              <Field
                id={`${formId}-subject`}
                label="Subject"
                value={values.subject}
                error={errors.subject}
                onChange={(value) => update("subject", value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor={`${formId}-message`} className="text-sm font-medium">
                Message
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={6}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                className="mt-2 w-full resize-y rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none placeholder:text-faint"
              />
              {errors.message ? (
                <p id={`${formId}-message-error`} className="mt-2 text-sm text-danger" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit">Send message</Button>
              <p className="text-xs leading-relaxed text-faint">
                {personal.email
                  ? "This opens your email app with the message ready to send."
                  : "Until an email address is published, use LinkedIn or GitHub."}
              </p>
            </div>
            <div className="mt-4" aria-live="polite">
              {status === "success" ? (
                <p className="rounded-2xl border border-line bg-bg px-4 py-3 text-sm" role="status">
                  Your email app should open with this message. If it does not, email {personal.email} directly.
                </p>
              ) : null}
              {status === "unconfigured" ? (
                <p className="rounded-2xl border border-line bg-bg px-4 py-3 text-sm" role="status">
                  This message is ready, and direct email is not published on the site yet. Please send it through{" "}
                  <a className="text-accent" href={personal.linkedin}>
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a className="text-accent" href={personal.github}>
                    GitHub
                  </a>
                  .
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={label.toLowerCase()}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3 text-sm text-ink outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
