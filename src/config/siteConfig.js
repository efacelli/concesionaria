// ============================================================================
// CONFIGURACIÓN CENTRAL DEL SITIO
// Modificar acá la información de la concesionaria. No hardcodear estos
// valores en ningún componente: siempre importar desde este archivo.
// ============================================================================

export const siteConfig = {
  name: "AUTOLISTO Automotores",
  shortName: "AUTOLISTO",
  tagline: "Vehículos seleccionados, atención personalizada",

  // Contacto
  whatsapp: "5493854723036", // +54 9 3854 72-3036, formato internacional sin '+' ni espacios
  phone: "3854 72-3036 / 3854 72-3051",
  email: "contacto@autolisto.com.ar",

  // Ubicación
  address: "Necochea y Pasaje Andes, La Banda, Santiago del Estero, Argentina",
  schedule: [
    { day: "Lunes a Viernes", hours: "8:30 – 12:30 y 17:00 – 21:00 (horario de verano)" },
    { day: "Sábados", hours: "9:00 – 13:00" },
    { day: "Domingos", hours: "Cerrado" },
  ],
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Necochea+y+Pasaje+Andes,+La+Banda,+Santiago+del+Estero,+Argentina&output=embed",
  googleMapsDirectionsUrl:
    "https://maps.google.com/?q=Necochea+y+Pasaje+Andes,+La+Banda,+Santiago+del+Estero,+Argentina",

  // Servicio de grúas 24 hs — número de contacto directo para emergencias
  towService: {
    enabled: true,
    phoneDisplay: "3854 72-3036",
    phoneTel: "+543854723036",
  },

  // Redes sociales — dejar en "" para ocultar el ícono correspondiente
  social: {
    instagram: "https://instagram.com/autolisto",
    facebook: "https://facebook.com/autolisto",
  },

  // --------------------------------------------------------------------
  // INTERRUPTOR DE PRECIOS
  // true  -> se muestran precios en cards, detalle, filtros, orden y WhatsApp
  // false -> se ocultan en toda la web (pero el dato sigue existiendo
  //          en src/data/vehicles.js por si se reactiva más adelante)
  // --------------------------------------------------------------------
  showPrices: false,
}

export default siteConfig
