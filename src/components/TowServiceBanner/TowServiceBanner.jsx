import { Truck, Phone } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"

// Sección destacada del servicio de grúas 24 hs. Fondo azul, detalles en
// blanco y letra negra — pensada para resaltar como algo urgente.
export default function TowServiceBanner() {
  if (!siteConfig.towService?.enabled) return null

  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black">
            <Truck size={24} strokeWidth={2} />
          </div>
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-tight text-black sm:text-xl">
              Servicio de grúas 24&nbsp;hs
            </p>
            <p className="text-sm text-black/80">Asistencia todos los días, a cualquier hora.</p>
          </div>
        </div>

        <a
          href={`tel:${siteConfig.towService.phoneTel}`}
          className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          <Phone size={16} /> Llamar {siteConfig.towService.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
