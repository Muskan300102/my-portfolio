import { useEffect, useState } from "react"

export type Theme = "dark" | "light"

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem("theme", theme)
    } catch {
      /* Storage can be unavailable in private browsing. */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", theme === "light" ? "#f4f4f2" : "#121210")
  }, [theme])

  const toggle = () => setTheme((current) => (current === "dark" ? "light" : "dark"))

  return { theme, toggle }
}
