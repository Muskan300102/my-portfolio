import { Link } from "react-router-dom"
import { SiteShell } from "../components/SiteShell"
import { usePageMeta } from "../hooks/usePageMeta"

export function NotFound() {
  usePageMeta("Page not found — Muskan Raghuvanshi", "This page is not part of the portfolio.")

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-3 font-display text-4xl">This page is not on the map.</h1>
        <p className="mt-3 max-w-lg text-muted">The link may be out of date. The work itself is still on the home page.</p>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center text-accent">
          Back home
        </Link>
      </section>
    </SiteShell>
  )
}
