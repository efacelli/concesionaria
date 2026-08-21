import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import VehicleGrid from "../../components/VehicleGrid/VehicleGrid"

export default function LatestArrivalsSection({ vehicles }) {
  if (!vehicles.length) return null

  return (
    <section id="ultimos-ingresos" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent-dark">Recién llegados</p>
            <h2 className="mt-1 font-display text-2xl font-medium text-ink sm:text-3xl">Últimos ingresos</h2>
          </div>
          <Link
            to="/vehiculos"
            className="hidden items-center gap-1 font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-accent-dark sm:inline-flex"
          >
            Ver catálogo <ArrowRight size={14} />
          </Link>
        </div>
        <VehicleGrid vehicles={vehicles} />
      </div>
    </section>
  )
}
