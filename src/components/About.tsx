import { about } from "../data/personal"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading index="01" eyebrow="About" title="Building intelligent solutions through code, data, and AI." />
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-6">
        <Reveal className="rounded-[1.6rem] border border-line bg-surface p-6 md:col-span-4 md:p-8">
          <div className="space-y-4 text-base leading-relaxed md:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="rounded-[1.6rem] bg-ink p-6 text-bg md:col-span-2 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">Philosophy</p>
          <p className="mt-4 font-serif text-3xl leading-tight italic">{about.philosophy}</p>
        </Reveal>
        <Reveal className="rounded-[1.6rem] border border-line bg-bg-soft p-6 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Interests</p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {about.interests.map((interest, index) => (
              <li key={interest} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-mono text-[11px] text-faint">{String(index + 1).padStart(2, "0")}</span>
                <span>{interest}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="grid gap-4 md:col-span-3">
          {about.highlights.map((item) => (
            <Reveal key={item.label}>
              <div className="rounded-[1.4rem] border border-line bg-surface px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{item.label}</p>
                <p className="mt-1 font-display text-xl tracking-tight">{item.value}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
