import { ArrowUpRight } from "lucide-react"
import { projects } from "../data/projects"
import { cn } from "../utils/cn"
import { Button } from "./Button"
import { ProjectVisual } from "./ProjectVisual"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading index="04" eyebrow="Projects" title="Selected work.">
          Analytics, retrieval, machine learning, conversational workflows, and products still taking shape.
        </SectionHeading>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const featured = index === 0 || index === projects.length - 1
          return (
            <Reveal key={project.slug} className={cn(featured && "md:col-span-2")}>
              <article
                className={cn(
                  "grid h-full gap-5 rounded-[1.8rem] border border-line bg-surface p-4 sm:p-5",
                  featured && "lg:grid-cols-2 lg:items-center",
                )}
              >
                <ProjectVisual variant={project.visual} label={project.title} />
                <div className="px-1 pb-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                    <span className="px-2 text-faint">/</span>
                    {project.badge}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-balance sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Button to={`/projects/${project.slug}`}>
                      View case study
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
