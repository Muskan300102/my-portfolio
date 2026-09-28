import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useReducedMotion } from "framer-motion"
import { navigation, sectionIds } from "../data/navigation"
import { personal } from "../data/personal"
import { useActiveSection } from "../hooks/useActiveSection"
import { useTheme } from "../hooks/useTheme"
import { cn } from "../utils/cn"
import { GithubIcon, LinkedinIcon } from "./Icons"

export function Navbar() {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()
  const active = useActiveSection(pathname === "/" ? sectionIds : [])
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  const goTo = (id: string) => {
    close()
    if (pathname !== "/") return
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
  }

  const onHome = pathname === "/"

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8",
          onHome
            ? scrolled
              ? "bg-[#ff4d1c]/95 text-white backdrop-blur"
              : "text-white"
            : "border-b border-line bg-surface/95 text-ink backdrop-blur",
        )}
      >
        <Link to="/" className="font-display text-lg font-semibold tracking-tight" onClick={close} aria-label="Muskan Raghuvanshi, home">
          Muskan
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={pathname === "/" ? `#${item.id}` : `${import.meta.env.BASE_URL}#${item.id}`}
              onClick={(event) => {
                if (pathname === "/") {
                  event.preventDefault()
                  goTo(item.id)
                }
              }}
              className={cn(
                "text-sm transition-opacity",
                active === item.id ? "underline underline-offset-8" : "opacity-80 hover:opacity-100",
              )}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener me"
            aria-label="GitHub"
            className="hidden size-10 items-center justify-center rounded-full sm:inline-flex"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener me"
            aria-label="LinkedIn"
            className="hidden size-10 items-center justify-center rounded-full sm:inline-flex"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex size-10 items-center justify-center rounded-full"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={theme === "light"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-1 rounded-full px-2 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={18} /> : <Menu size={18} />}
            <span aria-hidden="true" className="text-sm">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className={cn(
            "mx-4 rounded-2xl border p-3 shadow-lg xl:hidden",
            onHome ? "border-white/40 bg-white text-neutral-950" : "border-line bg-surface text-ink",
          )}
          aria-label="Mobile"
        >
          <ul className="grid grid-cols-2 gap-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={pathname === "/" ? `#${item.id}` : `${import.meta.env.BASE_URL}#${item.id}`}
                  className="flex min-h-11 items-center rounded-xl px-3 text-base"
                  onClick={(event) => {
                    if (pathname === "/") {
                      event.preventDefault()
                      goTo(item.id)
                    } else {
                      close()
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
