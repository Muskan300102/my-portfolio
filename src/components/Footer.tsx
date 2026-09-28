import { personal } from "../data/personal"
import { GithubIcon, LinkedinIcon } from "./Icons"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="font-display text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.85] tracking-[-0.06em]">
          {personal.firstName}
          <span className="block text-muted">{personal.lastName}</span>
        </p>
        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{personal.location}</p>
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener me"
              aria-label="GitHub"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener me"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <p className="text-sm text-faint">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
