import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="spec-plate text-6xl font-semibold text-ink-faint">404</p>
      <h1 className="font-display text-2xl font-medium text-ink">Página no encontrada</h1>
      <p className="text-sm text-ink-soft">La página que buscás no existe o fue movida.</p>
      <Link to="/" className="mt-2 bg-ink px-5 py-3 text-sm font-medium text-bg">
        Volver al inicio
      </Link>
    </div>
  )
}
