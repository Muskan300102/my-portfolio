import { useEffect } from "react"
import { personal } from "../data/personal"

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute("content", description)

    if (personal.siteUrl) {
      const canonicalHref = `${personal.siteUrl}${window.location.pathname}`
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement("link")
        canonical.setAttribute("rel", "canonical")
        document.head.appendChild(canonical)
      }
      canonical.setAttribute("href", canonicalHref)

      let ogUrl = document.querySelector('meta[property="og:url"]')
      if (!ogUrl) {
        ogUrl = document.createElement("meta")
        ogUrl.setAttribute("property", "og:url")
        document.head.appendChild(ogUrl)
      }
      ogUrl.setAttribute("content", canonicalHref)
    }
  }, [title, description])
}
