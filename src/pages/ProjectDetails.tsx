import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { Button } from "../components/Button"
import { ProjectVisual } from "../components/ProjectVisual"
import { SiteShell } from "../components/SiteShell"
import { getAdjacentProjects, getProject } from "../data/projects"
import { usePageMeta } from "../hooks/usePageMeta"

export function ProjectDetails() {
  const { slug = "" } = useParams()
  const project = getProject(slug)
  const adjacent = getAdjacentProjects(slug)

  usePageMeta(
    project ? `${project.title} — Muskan Raghuvanshi` : "Project not found — Muskan Raghuvanshi",
    project?.summary ?? "This project is not on the portfolio.",
  )

  if (!project) {
    return (
      <SiteShell>
        <section className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl">Project not found</h1>
          <p className="mt-3 text-muted">That case study is not part of this site.</p>
          <Link to="/#projects" className="mt-6 inline-flex text-accent">
            Back to projects
          </Link>
        </section>
      </SiteShell>
    )
  }

  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink">
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{project.badge}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight text-balance sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl ? (
            <Button href={project.githubUrl} external>
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button href={project.demoUrl} external variant="secondary">
              Live demo
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          ) : null}
        </div>
        <div className="mt-10">
          <ProjectVisual variant={project.visual} label={`${project.title} visual`} />
        </div>
        {project.disclaimer ? (
          <p className="mt-6 rounded-2xl border border-line bg-bg-soft px-4 py-3 text-sm leading-relaxed text-muted">
            {project.disclaimer}
          </p>
        ) : null}

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl">Problem</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Solution</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-2xl">Implementation</h2>
          <ul className="mt-4 space-y-3">
            {project.implementation.map((step) => (
              <li key={step} className="flex gap-3 leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[1.4rem] border border-line bg-surface p-6">
          <h2 className="font-display text-2xl">Outcome</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.outcome}</p>
        </section>

        {project.concepts ? (
          <section className="mt-10">
            <h2 className="font-display text-2xl">Concepts in progress</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {project.concepts.map((concept) => (
                <li key={concept.title} className="rounded-2xl border border-line p-5">
                  <h3 className="font-display text-lg">{concept.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{concept.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="More projects">
          {adjacent.previous ? (
            <Link to={`/projects/${adjacent.previous.slug}`} className="rounded-2xl border border-line p-4 hover:border-accent">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Previous</p>
              <p className="mt-2 font-display text-lg">{adjacent.previous.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {adjacent.next ? (
            <Link
              to={`/projects/${adjacent.next.slug}`}
              className="rounded-2xl border border-line p-4 text-left hover:border-accent sm:text-right"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Next</p>
              <p className="mt-2 font-display text-lg">{adjacent.next.title}</p>
            </Link>
          ) : null}
        </nav>
      </article>
    </SiteShell>
  )
}
