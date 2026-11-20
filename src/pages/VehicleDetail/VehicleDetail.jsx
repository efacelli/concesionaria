import { useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { getVehicleBySlug, getRelatedVehicles } from "../../utils/vehicleQueries"
import { formatMileage, formatYear, vehicleTitle } from "../../utils/format"
import { getVehicleWhatsAppUrl } from "../../utils/whatsapp"
import VehicleGallery from "../../components/VehicleGallery/VehicleGallery"
import Price from "../../components/ui/Price"
import Badge from "../../components/ui/Badge"
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton"
import VehicleGrid from "../../components/VehicleGrid/VehicleGrid"
import SpecRow from "./SpecRow"

export default function VehicleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const vehicle = getVehicleBySlug(slug)

  useEffect(() => {
    if (!vehicle) return
    window.scrollTo({ top: 0 })
  }, [vehicle])

  useDocumentTitle(
    vehicle ? vehicleTitle(vehicle) : "Vehículo no encontrado",
    vehicle ? `${vehicleTitle(vehicle)} — ${formatMileage(vehicle.mileage)}, ${vehicle.fuel}, ${vehicle.transmission}.` : undefined
  )

  if (!vehicle) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-medium text-ink">No encontramos este vehículo</h1>
        <p className="text-sm text-ink-soft">Puede que ya no esté disponible o que el enlace sea incorrecto.</p>
        <button onClick={() => navigate("/vehiculos")} className="mt-2 bg-ink px-5 py-3 text-sm font-medium text-bg">
          Ver catálogo completo
        </button>
      </div>
    )
  }

  const isSold = vehicle.status === "sold"
  const related = getRelatedVehicles(vehicle, 3)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
        <Link to="/" className="hover:text-ink">Inicio</Link>
        <ChevronRight size={12} />
        <Link to="/vehiculos" className="hover:text-ink">Vehículos</Link>
        <ChevronRight size={12} />
        <span className="text-ink-soft">{vehicle.brand} {vehicle.model}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <VehicleGallery images={vehicle.images} alt={vehicleTitle(vehicle)} />

          <div className="mt-10">
            <h2 className="font-display text-xl font-medium text-ink">Descripción</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{vehicle.description}</p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-medium text-ink">Equipamiento</h2>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {vehicle.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-soft">
                  <CheckCircle2 size={15} className="shrink-0 text-accent-dark" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="border border-line bg-surface p-6">
            {isSold && <Badge variant="dark" className="mb-3">Vendido</Badge>}
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{vehicle.brand}</p>
            <h1 className="font-display text-2xl font-semibold leading-tight text-ink">
              {vehicle.model} <span className="text-ink-soft">· {formatYear(vehicle)}</span>
            </h1>

            <Price value={vehicle.price} className="mt-3 block font-display text-3xl font-medium text-ink" />

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Tipo", vehicle.type],
                ["Kilometraje", formatMileage(vehicle.mileage)],
                ["Color", vehicle.color],
                ["Combustible", vehicle.fuel],
                ["Transmisión", vehicle.transmission],
                ["Motor", vehicle.engine],
                ["Tracción", vehicle.traction],
              ].map(([label, value]) => (
                <div key={label} className="spec-plate border border-line p-3 text-center">
                  <p className="text-[10px] uppercase tracking-wider text-ink-faint">{label}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              {isSold ? (
                <div className="border border-line bg-bg px-4 py-3 text-center text-sm text-ink-soft">
                  Este vehículo ya fue vendido. Mirá otras opciones disponibles debajo.
                </div>
              ) : (
                <WhatsAppButton href={getVehicleWhatsAppUrl(vehicle)} size="lg" className="w-full" />
              )}
            </div>

            <dl className="mt-6 border-t border-line pt-2">
              <SpecRow label="Estado" value={isSold ? "Vendido" : "Disponible"} />
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-2xl font-medium text-ink">También te puede interesar</h2>
          <div className="mt-6">
            <VehicleGrid vehicles={related} />
          </div>
        </section>
      )}
    </div>
  )
}
