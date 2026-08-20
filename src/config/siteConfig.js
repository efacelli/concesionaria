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
  whatsapp: "5493854723051", // +54 9 3854 72-3051, formato internacional sin '+' ni espacios
  phone: "+54 9 3854 72-3051",
  email: "contacto@autolisto.com.ar",

  // Ubicación
  address: "Necochea y Los Andes, La Banda, Santiago del Estero, Argentina",
  schedule: [
    { day: "Lunes a Viernes", hours: "9:00 – 19:00" },
    { day: "Sábados", hours: "9:00 – 13:00" },
    { day: "Domingos", hours: "Cerrado" },
  ],
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Necochea+y+Los+Andes,+La+Banda,+Santiago+del+Estero,+Argentina&output=embed",
  googleMapsDirectionsUrl:
    "https://maps.google.com/?q=Necochea+y+Los+Andes,+La+Banda,+Santiago+del+Estero,+Argentina",

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
  showPrices: true,
}

export default siteConfig
