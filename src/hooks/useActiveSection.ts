import { useEffect, useState } from "react"

const sectionKey = (ids: readonly string[]) => ids.join("|")

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState("")
  const key = sectionKey(ids)

  useEffect(() => {
    const list = key ? key.split("|") : []
    const elements = list
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [key])

  return active
}
