// Genera public/sitemap.xml y public/robots.txt a partir de siteConfig y vehicles.
// Corre automáticamente antes de cada build (npm run build).
import { writeFileSync } from "node:fs"
import { siteConfig } from "../src/config/siteConfig.js"
import { vehicles } from "../src/data/vehicles.js"

const base = siteConfig.url.replace(/\/$/, "")
const today = new Date().toISOString().slice(0, 10)
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;")

const pages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/vehiculos", priority: "0.9", changefreq: "daily" },
  { loc: "/ubicacion", priority: "0.6", changefreq: "monthly" },
]

const urls = pages.map(
  (p) => `  <url><loc>${base}${p.loc}</loc><lastmod>${today}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`
)
for (const v of vehicles) {
  if (v.status === "sold") continue
  const imgs = (v.images || [])
    .map((i) => `<image:image><image:loc>${esc(base + i)}</image:loc><image:title>${esc(`${v.brand} ${v.model} ${v.year}`)}</image:title></image:image>`)
    .join("")
  urls.push(`  <url><loc>${base}/vehiculos/${v.slug}</loc><lastmod>${v.createdAt || today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority>${imgs}</url>`)
}

writeFileSync(
  new URL("../public/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`
)
writeFileSync(new URL("../public/robots.txt", import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)
console.log(`sitemap.xml: ${urls.length} URLs (${base})`)
