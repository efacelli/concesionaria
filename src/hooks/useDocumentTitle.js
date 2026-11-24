import { useEffect } from "react"
import { siteConfig } from "../config/siteConfig"

// SEO por página: title, description, canonical, Open Graph, Twitter,
// robots y datos estructurados (JSON-LD). Se actualiza en cada navegación.
function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

function abs(path) {
  if (!path) return siteConfig.url + siteConfig.ogImage
  return path.startsWith("http") ? path : siteConfig.url + path
}

export function useDocumentTitle(title, description, options = {}) {
  const { image, noindex = false, jsonLd, type = "website" } = options
  const jsonKey = jsonLd ? JSON.stringify(jsonLd) : ""

  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
    const desc = description || siteConfig.tagline
    const path = window.location.pathname
    const canonical = siteConfig.url + (path === "/" ? "/" : path.replace(/\/$/, ""))

    document.title = fullTitle
    setMeta("name", "description", desc)
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large")

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }
    link.setAttribute("href", canonical)

    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", desc)
    setMeta("property", "og:url", canonical)
    setMeta("property", "og:type", type)
    setMeta("property", "og:image", abs(image))
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", desc)
    setMeta("name", "twitter:image", abs(image))

    const id = "page-jsonld"
    document.getElementById(id)?.remove()
    if (jsonKey) {
      const s = document.createElement("script")
      s.id = id
      s.type = "application/ld+json"
      s.text = jsonKey
      document.head.appendChild(s)
    }
    return () => document.getElementById(id)?.remove()
  }, [title, description, image, noindex, type, jsonKey])
}
