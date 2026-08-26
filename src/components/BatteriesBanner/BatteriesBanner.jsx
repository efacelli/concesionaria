import { Phone } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"
import logoMateo from "../../assets/logo-mateo-baterias.png"

// Sección "Anexo venta de baterías MATEO" — misma estructura de banner
// que la de grúas, reutiliza el mismo número de contacto.
export default function BatteriesBanner() {
  if (!siteConfig.towService?.enabled) return null

  return (
    <section className="bg-surface-alt">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <img src={logoMateo} alt="Baterías Mateo" className="h-14 w-auto shrink-0 sm:h-16" />
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-tight text-ink sm:text-xl">
              Anexo venta de baterías MATEO
            </p>
            <p className="text-sm text-ink-soft">Baterías para auto y camioneta, con asesoramiento e instalación.</p>
          </div>
        </div>

        <a
          href={`tel:${siteConfig.towService.phoneTel}`}
          className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          <Phone size={16} /> Llamar {siteConfig.towService.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
