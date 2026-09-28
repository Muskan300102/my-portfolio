import { useState } from "react"
import { getJourney } from "../data/journey"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

function OrgMark({ src, mark }: { src?: string; mark: string }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <span
        aria-hidden="true"
        className="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink font-display text-xs font-semibold text-bg"
      >
        {mark}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt=""
      width={44}
      height={44}
      className="size-11 shrink-0 rounded-2xl border border-line bg-bg object-cover"
      onError={() => setFailed(true)}
    />
  )
}

export function CareerTimeline() {
  const journey = getJourney()

  return (
    <Section id="journey">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading index="02" eyebrow="Journey" title="Education and work, in the order they happened.">
            Scroll sideways through the path. The same story stacks cleanly on a small screen.
          </SectionHeading>
        </div>
      </Reveal>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
        {journey.map((entry) => (
          <article
            key={entry.id}
            className={`flex w-[min(86vw,24rem)] shrink-0 snap-start flex-col rounded-[1.6rem] border bg-surface p-5 md:w-[26rem] ${
              entry.current ? "border-accent" : "border-line"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <OrgMark src={entry.logo} mark={entry.mark} />
              <p className="text-right font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {entry.kind === "education" ? "Education" : "Work"}
                <span className="mt-1 block normal-case tracking-normal text-ink">{entry.period}</span>
              </p>
            </div>
            <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{entry.title}</h3>
            <p className="mt-2 text-sm text-muted">
              {entry.organization}
              <span className="text-faint"> · </span>
              {entry.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed">{entry.summary}</p>
            {entry.points.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {entry.technologies.length > 0 ? (
              <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                {entry.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
