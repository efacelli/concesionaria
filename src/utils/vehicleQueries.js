// ============================================================================
// CAPA DE ACCESO A DATOS DE VEHÍCULOS
// Todos los componentes/páginas consultan vehículos a través de estas
// funciones, nunca importan src/data/vehicles.js directamente.
// Esto permite reemplazar la fuente local por una API/backend en el futuro
// modificando únicamente este archivo (idealmente pasando las funciones a
// async y usando fetch/axios), sin tocar la interfaz.
// ============================================================================
import { vehicles } from "../data/vehicles"

export function getAllVehicles() {
  return vehicles
}

// Vehículos visibles en catálogo/inicio: nunca los vendidos.
export function getAvailableVehicles() {
  return vehicles.filter((v) => v.status === "available")
}

export function getVehicleBySlug(slug) {
  return vehicles.find((v) => v.slug === slug)
}

export function getFeaturedVehicles(limit = 6) {
  return getAvailableVehicles()
    .filter((v) => v.isFeatured)
    .slice(0, limit)
}

// "Últimos ingresos": calculado a partir de createdAt, no es una lista aparte.
export function getLatestVehicles(limit = 6) {
  return [...getAvailableVehicles()]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit)
}

// Un vehículo se considera "nuevo ingreso" si fue cargado en los últimos 14 días.
export function isNewArrival(vehicle) {
  const days = (Date.now() - new Date(vehicle.createdAt).getTime()) / 86400000
  return days <= 14
}

export function getDistinctBrands() {
  return [...new Set(getAvailableVehicles().map((v) => v.brand))].sort()
}

export function getDistinctColors() {
  return [...new Set(getAvailableVehicles().map((v) => v.color))].sort()
}

export function getDistinctFuels() {
  return [...new Set(getAvailableVehicles().map((v) => v.fuel))].sort()
}

export function getDistinctTransmissions() {
  return [...new Set(getAvailableVehicles().map((v) => v.transmission))].sort()
}

export function getPriceBounds() {
  const prices = getAvailableVehicles().map((v) => v.price)
  return { min: Math.min(...prices), max: Math.max(...prices) }
}

export function getRelatedVehicles(vehicle, limit = 3) {
  return getAvailableVehicles()
    .filter((v) => v.id !== vehicle.id && v.brand === vehicle.brand)
    .concat(getAvailableVehicles().filter((v) => v.id !== vehicle.id && v.brand !== vehicle.brand))
    .slice(0, limit)
}
