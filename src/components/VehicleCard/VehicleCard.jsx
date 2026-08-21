import { Link } from "react-router-dom"
import { Gauge, Fuel, ArrowRight } from "lucide-react"
import ImageWithFallback from "../ui/ImageWithFallback"
import Badge from "../ui/Badge"
import Price from "../ui/Price"
import { formatMileage, vehicleTitle } from "../../utils/format"
import { isNewArrival } from "../../utils/vehicleQueries"

export default function VehicleCard({ vehicle }) {
  const isSold = vehicle.status === "sold"

  return (
    <Link
      to={`/vehiculos/${vehicle.slug}`}
      className="group flex flex-col overflow-hidden border border-line bg-surface transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(20,23,28,0.25)]"
    >
      <div className="relative aspect-[4/3]">
        <ImageWithFallback
          src={vehicle.images[0]}
          alt={vehicleTitle(vehicle)}
          className="h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {isNewArrival(vehicle) && !isSold && <Badge variant="accent">Nuevo ingreso</Badge>}
          {isSold && <Badge variant="dark">Vendido</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            {vehicle.brand} · {vehicle.type}
          </p>
          <h3 className="font-display text-lg font-medium leading-tight text-ink">
            {vehicle.model} <span className="text-ink-soft">· {vehicle.year}</span>
          </h3>
        </div>

        {/* Placa de ficha técnica — elemento visual firma del sitio */}
        <div className="spec-plate flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line py-2 text-[12px] text-ink-soft">
          <span className="inline-flex items-center gap-1">
            <Gauge size={13} /> {formatMileage(vehicle.mileage)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Fuel size={13} /> {vehicle.fuel}
          </span>
          <span>{vehicle.transmission}</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <Price value={vehicle.price} className="font-display text-xl font-medium text-ink" />
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-dark transition-transform group-hover:translate-x-0.5">
            Ver vehículo <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  )
}
