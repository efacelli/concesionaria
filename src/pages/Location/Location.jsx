import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { siteConfig } from "../../config/siteConfig"
import LocationInfo from "../../components/LocationInfo/LocationInfo"

export default function Location() {
  useDocumentTitle("Ubicación", `Encontranos en ${siteConfig.address}. Horarios, teléfono y cómo llegar.`)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Visitanos</p>
      <h1 className="mt-1 font-display text-3xl font-medium text-ink">Ubicación</h1>
      <p className="mt-2 max-w-lg text-sm text-ink-soft">
        Te esperamos en el local. Si preferís, escribinos antes por WhatsApp y coordinamos tu visita.
      </p>

      <div className="mt-10">
        <LocationInfo />
      </div>
    </div>
  )
}
