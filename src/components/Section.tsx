import type { ReactNode } from "react"
import { cn } from "../utils/cn"

export function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-14 md:py-20", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {index}
        <span className="px-2 text-faint">/</span>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl md:leading-[0.95]">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{children}</div>
      ) : null}
    </div>
  )
}
