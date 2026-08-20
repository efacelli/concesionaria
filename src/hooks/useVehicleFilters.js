// Hook que centraliza el estado de filtros + orden del catálogo, y devuelve
// la lista de vehículos ya filtrada/ordenada. Único lugar con esta lógica.
import { useMemo, useState } from "react"
import { siteConfig } from "../config/siteConfig"

export const defaultFilters = {
  search: "",
  brand: "",
  model: "",
  year: "",
  minPrice: "",
  maxPrice: "",
  minMileage: "",
  maxMileage: "",
  color: "",
  fuel: "",
  transmission: "",
}

export const sortOptions = [
  { value: "recent", label: "Más recientes" },
  { value: "price-asc", label: "Menor precio", pricesOnly: true },
  { value: "price-desc", label: "Mayor precio", pricesOnly: true },
  { value: "mileage-asc", label: "Menor kilometraje" },
  { value: "mileage-desc", label: "Mayor kilometraje" },
]

// Opciones de orden visibles, respetando showPrices.
export function getAvailableSortOptions() {
  return sortOptions.filter((opt) => !opt.pricesOnly || siteConfig.showPrices)
}

export function useVehicleFilters(vehicles) {
  const [filters, setFilters] = useState(defaultFilters)
  const [sort, setSort] = useState("recent")

  function setFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  function clearFilters() {
    setFilters(defaultFilters)
  }

  const activeFilterCount = useMemo(
    () => Object.values(filters).filter((v) => v !== "" && v != null).length,
    [filters]
  )

  const results = useMemo(() => {
    let list = vehicles

    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase()
      list = list.filter(
        (v) =>
          v.brand.toLowerCase().includes(q) ||
          v.model.toLowerCase().includes(q) ||
          `${v.brand} ${v.model}`.toLowerCase().includes(q)
      )
    }
    if (filters.brand) list = list.filter((v) => v.brand === filters.brand)
    if (filters.model.trim())
      list = list.filter((v) => v.model.toLowerCase().includes(filters.model.trim().toLowerCase()))
    if (filters.year) list = list.filter((v) => String(v.year) === String(filters.year))
    if (filters.color) list = list.filter((v) => v.color === filters.color)
    if (filters.fuel) list = list.filter((v) => v.fuel === filters.fuel)
    if (filters.transmission) list = list.filter((v) => v.transmission === filters.transmission)

    if (siteConfig.showPrices) {
      if (filters.minPrice) list = list.filter((v) => v.price >= Number(filters.minPrice))
      if (filters.maxPrice) list = list.filter((v) => v.price <= Number(filters.maxPrice))
    }
    if (filters.minMileage) list = list.filter((v) => v.mileage >= Number(filters.minMileage))
    if (filters.maxMileage) list = list.filter((v) => v.mileage <= Number(filters.maxMileage))

    const sorted = [...list]
    switch (sort) {
      case "price-asc":
        if (siteConfig.showPrices) sorted.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        if (siteConfig.showPrices) sorted.sort((a, b) => b.price - a.price)
        break
      case "mileage-asc":
        sorted.sort((a, b) => a.mileage - b.mileage)
        break
      case "mileage-desc":
        sorted.sort((a, b) => b.mileage - a.mileage)
        break
      default:
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    return sorted
  }, [vehicles, filters, sort])

  return { filters, setFilter, clearFilters, activeFilterCount, sort, setSort, results }
}
