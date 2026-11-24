import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { siteConfig } from "../../config/siteConfig"
import LocationInfo from "../../components/LocationInfo/LocationInfo"
import ImageWithFallback from "../../components/ui/ImageWithFallback"

export default function Location() {
  useDocumentTitle(
    "Ubicación y horarios",
    `Visitá AUTOLISTO Automotores en ${siteConfig.address}. Horarios de atención, teléfono, WhatsApp y cómo llegar.`
  )

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Visitanos</p>
        <h1 className="mt-1 font-display text-3xl font-medium text-ink">Ubicación</h1>
        <p className="mt-2 max-w-lg text-sm text-ink-soft">
          Te esperamos en el local. Si preferís, escribinos antes por WhatsApp y coordinamos tu visita.
        </p>
      </div>

      {/* Foto horizontal a todo el ancho de la pantalla. Va en public/local.jpg
          (o el nombre que se use); una foto horizontal del frente/local
          queda perfecta acá — se recorta automáticamente a esta franja. */}
     

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <LocationInfo />
      </div>
    </div>
  )
}
