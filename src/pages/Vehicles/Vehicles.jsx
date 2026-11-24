import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { useVehicleFilters, getAvailableSortOptions } from "../../hooks/useVehicleFilters"
import {
  getAvailableVehicles,
  getDistinctBrands,
  getDistinctColors,
  getDistinctFuels,
  getDistinctTransmissions,
  getDistinctTypes,
} from "../../utils/vehicleQueries"
import VehicleGrid from "../../components/VehicleGrid/VehicleGrid"
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters"
import FiltersModal from "../../components/VehicleFilters/FiltersModal"

const allVehicles = getAvailableVehicles()
const years = [...new Set(allVehicles.map((v) => String(v.year)))].sort((a, b) => b - a)

const facets = {
  types: getDistinctTypes(),
  brands: getDistinctBrands(),
  years,
  colors: getDistinctColors(),
  fuels: getDistinctFuels(),
  transmissions: getDistinctTransmissions(),
}

export default function Vehicles() {
  useDocumentTitle(
    "Autos y camionetas usados y 0km en venta",
    "Catálogo de autos y camionetas usados y 0km en La Banda, Santiago del Estero. Filtrá por marca, año, kilometraje y tipo. Hilux, Amarok, Ranger, Nivus y más."
  )

  const { filters, setFilter, clearFilters, activeFilterCount, sort, setSort, results } = useVehicleFilters(allVehicles)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const sortOptions = getAvailableSortOptions()

  const filterProps = { filters, setFilter, clearFilters, activeFilterCount, facets }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent-dark">Catálogo</p>
        <h1 className="mt-1 font-display text-3xl font-medium text-ink">Vehículos disponibles</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 filters-scroll">
            <VehicleFilters {...filterProps} />
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <p className="text-sm text-ink-soft">
              <span className="font-medium text-ink">{results.length}</span> vehículo{results.length !== 1 ? "s" : ""} encontrado{results.length !== 1 ? "s" : ""}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-line px-4 py-2 text-sm font-medium text-ink lg:hidden"
              >
                <SlidersHorizontal size={15} />
                Filtros
                {activeFilterCount > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] text-white">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <label className="flex items-center gap-2 text-sm text-ink-soft">
                <span className="hidden sm:inline">Ordenar:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-accent"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <VehicleGrid vehicles={results} />
        </div>
      </div>

      <FiltersModal open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} {...filterProps} />
    </div>
  )
}
