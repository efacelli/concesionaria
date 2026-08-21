import { Truck, Phone } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"

// Sección destacada del servicio de grúas 24 hs. Fondo amarillo a
// propósito — es el único lugar del sitio que usa el amarillo como
// color de fondo grande, para que resalte como algo urgente/emergente.
export default function TowServiceBanner() {
  if (!siteConfig.towService?.enabled) return null

  return (
    <section className="bg-alert">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-alert">
            <Truck size={24} strokeWidth={2} />
          </div>
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-tight text-navy-900 sm:text-xl">
              Servicio de grúas 24&nbsp;hs
            </p>
            <p className="text-sm text-navy-900/80">Asistencia todos los días, a cualquier hora.</p>
          </div>
        </div>

        <a
          href={`tel:${siteConfig.towService.phoneTel}`}
          className="inline-flex items-center gap-2 bg-navy-900 px-5 py-3 text-sm font-semibold text-alert transition-colors hover:bg-navy-900/90"
        >
          <Phone size={16} /> Llamar {siteConfig.towService.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
