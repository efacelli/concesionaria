# AUTOLISTO Automotores — Web de concesionaria

Proyecto React + Vite + Tailwind CSS v4 + React Router, listo para presentar a un cliente real y desplegar en Vercel.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Cómo compilar para producción

```bash
npm run build
```

## Dónde editar lo importante

- **Datos de la concesionaria (nombre, WhatsApp, dirección, horarios, redes, precios sí/no):**
  `src/config/siteConfig.js` — todo se controla desde acá, incluido el interruptor `showPrices`.

- **Vehículos:**
  `src/data/vehicles.js` — reemplazar las imágenes placeholder (picsum.photos) por las fotos reales
  del cliente, y cargar el inventario real. La forma de cada objeto vehículo está documentada ahí mismo.

- **Reemplazar la fuente de datos por un backend en el futuro:**
  Solo hay que editar `src/utils/vehicleQueries.js` (pasar sus funciones a async/fetch).
  Ningún componente ni página accede a `vehicles.js` directamente, así que la interfaz no se toca.

## Activar/desactivar precios

En `src/config/siteConfig.js`:

```js
showPrices: true // o false
```

Con `false` los precios desaparecen de cards, detalle, filtros, orden y del mensaje de WhatsApp,
sin romper el diseño. El dato del precio sigue existiendo en `vehicles.js` por si se reactiva.

## Despliegue en Vercel

Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
