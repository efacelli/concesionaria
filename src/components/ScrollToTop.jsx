import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Lleva el scroll al tope en cada cambio de ruta (excepto anclas con #).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}
