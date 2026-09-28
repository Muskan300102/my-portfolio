import { useMemo, useState } from "react"
import { skillGroups, skillLevelMeta } from "../data/skills"
import type { SkillLevel } from "../types"
import { cn } from "../utils/cn"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"
import { SkillGlyph } from "./SkillGlyph"

const filters: Array<{ id: SkillLevel | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "core", label: "Core" },
  { id: "working", label: "Working knowledge" },
  { id: "exploring", label: "Exploring" },
]

export function Skills() {
  const [level, setLevel] = useState<SkillLevel | "all">("all")

  const counts = useMemo(() => {
    const skills = skillGroups.flatMap((group) => group.skills)
    return {
      all: skills.length,
      core: skills.filter((skill) => skill.level === "core").length,
      working: skills.filter((skill) => skill.level === "working").length,
      exploring: skills.filter((skill) => skill.level === "exploring").length,
    }
  }, [])

  const visible = skillGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) => level === "all" || skill.level === level),
    }))
    .filter((group) => group.skills.length > 0)

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading index="03" eyebrow="Skills" title="A working map, not a scoreboard.">
          Grouped by how I use each tool today. I move items between Core, Working knowledge, and Currently exploring
          as that changes.
        </SectionHeading>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter skills by familiarity">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={level === filter.id}
            onClick={() => setLevel(filter.id)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm transition",
              level === filter.id
                ? "border-accent bg-accent text-on-accent"
                : "border-line bg-surface text-muted hover:text-ink",
            )}
          >
            {filter.label}
            <span className="ml-2 font-mono text-[11px]">{counts[filter.id]}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((group) => (
          <Reveal key={group.id}>
            <div className="h-full rounded-[1.6rem] border border-line bg-surface p-5 sm:p-6">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.summary}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2 pr-3 transition hover:border-ink">
                      <span className="grid size-7 place-items-center rounded-full bg-bg-soft text-accent">
                        <SkillGlyph name={skill.name} />
                      </span>
                      <span className="text-sm">{skill.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                        {skillLevelMeta[skill.level].label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
