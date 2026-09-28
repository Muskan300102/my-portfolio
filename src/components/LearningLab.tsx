import { ArrowUpRight } from "lucide-react"
import { learningStages, learningTopics } from "../data/learning"
import { personal } from "../data/personal"
import type { LearningStatus } from "../types"
import { cn } from "../utils/cn"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

function stageIndex(status: LearningStatus) {
  return learningStages.indexOf(status)
}

export function LearningLab() {
  return (
    <Section id="learning">
      <Reveal>
        <SectionHeading index="05" eyebrow="Learning lab" title="What I am studying alongside the job.">
          Status labels are notes I update by hand. They are not measured scores. Repository links appear when a public
          learning repo exists.
        </SectionHeading>
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {learningTopics.length} active topics
        </p>
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center gap-1 text-sm text-accent"
        >
          GitHub profile
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>

      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {learningTopics.map((topic, index) => {
          const current = stageIndex(topic.status)
          return (
            <li key={topic.id} className="h-full">
              <Reveal className="h-full" delay={Math.min(index * 0.03, 0.12)}>
                <article className="flex h-full flex-col rounded-[1.4rem] border border-line bg-bg-soft/50 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl leading-snug">{topic.title}</h3>
                    <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan">
                      {topic.status}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{topic.detail}</p>
                  <ol className="mt-5 flex gap-1.5" aria-label={`${topic.title} status: ${topic.status}, updated manually`}>
                    {learningStages.map((stage, stagePosition) => (
                      <li
                        key={stage}
                        className={cn(
                          "h-1.5 flex-1 rounded-full",
                          stagePosition <= current ? "bg-accent" : "bg-line",
                        )}
                      >
                        <span className="sr-only">{stage}</span>
                      </li>
                    ))}
                  </ol>
                  {typeof topic.progress === "number" ? (
                    <p className="mt-3 font-mono text-[11px] text-faint">Manually set · {topic.progress}%</p>
                  ) : null}
                  {topic.repository ? (
                    <a
                      href={topic.repository}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-accent"
                    >
                      Learning repository
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
