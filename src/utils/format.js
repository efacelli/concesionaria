// Utilidades de formateo. Centralizadas para no repetir lógica de precios,
// kilometraje, etc. en distintos componentes.

export function formatPrice(value) {
  if (typeof value !== "number") return ""
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  })
}

export function formatMileage(value) {
  if (typeof value !== "number") return ""
  return `${value.toLocaleString("es-AR")} km`
}

export function formatDate(isoDate) {
  const d = new Date(isoDate)
  return d.toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" })
}

// Título legible de un vehículo, reutilizado en cards, detalle y WhatsApp.
export function vehicleTitle(vehicle) {
  return `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
}
