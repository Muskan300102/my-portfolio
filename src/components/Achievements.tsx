import { achievements } from "../data/achievements"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

export function Achievements() {
  return (
    <Section id="highlights" className="bg-bg-soft/40">
      <Reveal>
        <SectionHeading index="06" eyebrow="Highlights" title="Milestones I can point to.">
          A factual record. Certifications, awards, and new results can be added as they happen.
        </SectionHeading>
      </Reveal>
      <ol className="mt-10 grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <li key={item.id} className="h-full">
            <Reveal className="h-full" delay={Math.min(index * 0.03, 0.12)}>
              <article className="flex h-full gap-4 rounded-[1.4rem] border border-line bg-surface p-5">
                <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                  {item.year ? (
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{item.year}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
