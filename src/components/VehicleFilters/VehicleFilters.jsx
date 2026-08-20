import { Search, X } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"
import { SelectField, RangeField } from "./FilterField"

// Contenido de filtros en sí — se usa tanto en el sidebar de desktop
// como dentro del modal de mobile, para no duplicar la lógica.
export default function VehicleFilters({ filters, setFilter, clearFilters, activeFilterCount, facets, onClose }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-medium">Filtros</h2>
        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="bg-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-navy-900 transition-colors hover:bg-accent-dark"
            >
              Limpiar filtros
            </button>
          )}
          {onClose && (
            <button onClick={onClose} aria-label="Cerrar filtros" className="text-ink-soft md:hidden">
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Buscar</span>
        <div className="relative">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilter("search", e.target.value)}
            placeholder="Marca o modelo..."
            className="w-full border border-line bg-surface py-2 pl-9 pr-3 text-sm text-ink focus:border-accent"
          />
        </div>
      </label>

      <SelectField label="Marca" value={filters.brand} onChange={(v) => setFilter("brand", v)} options={facets.brands} />
      <SelectField label="Año" value={filters.year} onChange={(v) => setFilter("year", v)} options={facets.years} />

      {siteConfig.showPrices && (
        <RangeField
          label="Precio"
          minValue={filters.minPrice}
          maxValue={filters.maxPrice}
          onMinChange={(v) => setFilter("minPrice", v)}
          onMaxChange={(v) => setFilter("maxPrice", v)}
        />
      )}

      <RangeField
        label="Kilometraje"
        minValue={filters.minMileage}
        maxValue={filters.maxMileage}
        onMinChange={(v) => setFilter("minMileage", v)}
        onMaxChange={(v) => setFilter("maxMileage", v)}
        minPlaceholder="0"
        maxPlaceholder="200000"
      />

      <SelectField label="Color" value={filters.color} onChange={(v) => setFilter("color", v)} options={facets.colors} />
      <SelectField label="Combustible" value={filters.fuel} onChange={(v) => setFilter("fuel", v)} options={facets.fuels} />
      <SelectField label="Transmisión" value={filters.transmission} onChange={(v) => setFilter("transmission", v)} options={facets.transmissions} />
    </div>
  )
}
