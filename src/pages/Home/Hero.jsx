import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"
import { getGenericWhatsAppUrl } from "../../utils/whatsapp"
import ImageWithFallback from "../../components/ui/ImageWithFallback"

// Foto del hero: va en public/portada.jpg. Para cambiarla alcanza con
// reemplazar ese archivo (mismo nombre) — no hace falta tocar código.
const heroImage = "/portada.jpg"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-0 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="spec-plate inline-block border border-line px-3 py-1 text-[11px] uppercase tracking-wider text-ink-soft">
            {siteConfig.address.split(",")[1]?.trim() || "Santiago del Estero"} · Concesionaria
          </p>

          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Vehículos que
            <br />
            valen lo que cuestan.
          </h1>

          <p className="mt-5 max-w-md text-base text-ink-soft sm:text-lg">
            En {siteConfig.name} cada auto pasa por una revisión mecánica y documental
            antes de estar en venta. Elegí sin sorpresas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/vehiculos"
              className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-accent-dark"
            >
              Ver vehículos <ArrowRight size={16} />
            </Link>
            <a
              href={getGenericWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[520px]">
            <ImageWithFallback
              src={heroImage}
              alt="Vehículos disponibles en el lote"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
