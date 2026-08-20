// ============================================================================
// LÓGICA CENTRALIZADA DE WHATSAPP
// Toda la generación de links/mensajes de WhatsApp pasa por acá.
// Ningún componente debe armar el link o el texto del mensaje manualmente.
// ============================================================================
import { siteConfig } from "../config/siteConfig"
import { formatPrice, vehicleTitle } from "./format"

function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`
}

// Mensaje genérico (header, footer, botón flotante, página de ubicación).
export function getGenericWhatsAppUrl() {
  const message = `Hola, buenas. Quisiera recibir información sobre los vehículos disponibles en ${siteConfig.name}.`
  return buildWhatsAppUrl(message)
}

// Mensaje para consultar por un vehículo puntual. Respeta showPrices:
// solo incluye el precio en el texto si la configuración lo permite.
export function getVehicleWhatsAppUrl(vehicle) {
  const title = vehicleTitle(vehicle)
  const priceFragment = siteConfig.showPrices
    ? ` publicado en ${formatPrice(vehicle.price)}`
    : ""
  const message = `Hola, buenas. Me interesa este ${title}${priceFragment}. Quisiera recibir más información.`
  return buildWhatsAppUrl(message)
}
