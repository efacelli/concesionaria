import { useEffect } from "react"
import { siteConfig } from "../config/siteConfig"

// SEO básico: título por página, consistente en toda la app.
export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.name}` : siteConfig.name
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", "description")
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", description)
    }
  }, [title, description])
}
