import { ArrowUpRight, Download } from "lucide-react"
import { Link } from "react-router-dom"
import { getCurrentRole } from "../data/experience"
import { personal } from "../data/personal"
import { projects } from "../data/projects"
import { ProjectVisual } from "./ProjectVisual"

const tools = ["Python", "SQL", "PostgreSQL", "Pandas", "RAG", "Generative AI", "Healthcare workflows"]

const grid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cpath d='M48 0 V96 M0 48 H96' stroke='white' stroke-opacity='0.22' stroke-width='1'/%3E%3Cpath d='M48 43 V53 M43 48 H53' stroke='white' stroke-opacity='0.85' stroke-width='1'/%3E%3C/svg%3E\")"

export function Hero() {
  const current = getCurrentRole()
  const featured = projects[0]
  const year = new Date().getFullYear()

  return (
    <>
      <section className="relative overflow-hidden bg-hero text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: grid, backgroundSize: "96px 96px" }} />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 content-end gap-6 px-4 pb-6 pt-24 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-8 lg:pt-20">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-16 z-0 -translate-x-1/2 select-none font-display text-[28vw] font-semibold leading-none tracking-[-0.07em] text-white/25 lg:top-20 lg:text-[13rem]"
          >
            {personal.firstName.toUpperCase()}
          </p>

          <p className="relative z-10 max-w-[15rem] text-[11px] font-medium uppercase leading-relaxed tracking-[0.16em] lg:col-span-3 lg:mb-28 lg:self-end">
            I build intelligent applications through code, data, and AI. Simple systems. Real problems.
          </p>

          <div className="relative z-10 mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg lg:col-span-6 lg:max-w-none lg:translate-y-6 lg:self-end">
            <img
              src={personal.profileImage}
              alt={personal.profileAlt}
              width={923}
              height={1024}
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_18%] contrast-110 saturate-[0.92]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #1b2a4a 0%, rgba(27,42,74,0.55) 7%, rgba(27,42,74,0) 18%), linear-gradient(to top, #1b2a4a 0%, rgba(27,42,74,0) 22%), linear-gradient(to right, #1b2a4a 0%, rgba(27,42,74,0) 12%), linear-gradient(to left, #1b2a4a 0%, rgba(27,42,74,0) 12%), radial-gradient(ellipse at 50% 46%, transparent 52%, rgba(8,14,28,0.35) 100%)",
              }}
            />
          </div>

          <Link
            to={`/projects/${featured.slug}`}
            className="relative z-10 w-full max-w-[220px] justify-self-start rounded-2xl bg-white p-2.5 text-neutral-950 shadow-sm lg:col-span-3 lg:mb-32 lg:justify-self-end lg:self-end"
          >
            <div className="overflow-hidden rounded-xl">
              <ProjectVisual variant={featured.visual} label={featured.title} />
            </div>
            <p className="mt-2 flex items-center justify-between gap-2 px-1 pb-1 text-[10px] font-medium uppercase tracking-[0.12em]">
              <span>{featured.badge}</span>
              <span className="text-neutral-500">/ {featured.technologies[0]}</span>
            </p>
          </Link>

          <div className="relative z-20 lg:col-span-8 lg:-mt-16">
            <p className="text-xs tracking-[0.12em] text-white/80">©{year}</p>
            <h1 className="font-display text-[18vw] font-semibold leading-[0.8] tracking-[-0.06em] sm:text-8xl lg:text-[8.4rem]">
              {personal.firstName.toUpperCase()}
            </h1>
            <p className="mt-2 text-sm text-white/85">
              {personal.lastName} · {personal.shortLocation}
            </p>
            <a href={personal.resumeUrl} download className="mt-3 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>

          <a
            href="#contact"
            className="relative z-20 flex max-w-sm items-center gap-3 self-end rounded-2xl bg-neutral-950 p-2.5 text-white lg:col-span-4 lg:mb-3 lg:justify-self-end"
          >
            <img src={personal.profileImage} alt="" width={56} height={56} className="size-14 shrink-0 rounded-xl object-cover object-top" />
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.14em] text-white/60">Let’s talk</span>
              <span className="mt-0.5 block truncate font-display text-lg font-semibold leading-none">{personal.firstName}</span>
              <span className="mt-1 block truncate text-xs text-white/70">{current?.title ?? personal.roles[0]}</span>
            </span>
            <span className="ml-auto grid size-11 shrink-0 place-items-center rounded-xl bg-white text-neutral-950" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </section>

      <section aria-label="Tools" className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
          <p className="max-w-[9rem] shrink-0 text-[11px] font-medium uppercase leading-relaxed tracking-[0.16em] text-muted">
            Tools I work with
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {tools.map((tool) => (
              <li key={tool} className="font-display text-xl tracking-tight text-ink/70">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
