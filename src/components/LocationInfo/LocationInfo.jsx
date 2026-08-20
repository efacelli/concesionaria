import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton"
import { getGenericWhatsAppUrl } from "../../utils/whatsapp"

// Bloque de ubicación reutilizado en la Home (preview) y en /ubicacion (completo).
export default function LocationInfo({ compact = false }) {
  return (
    <div className={`grid grid-cols-1 gap-8 ${compact ? "lg:grid-cols-2" : "lg:grid-cols-5"}`}>
      <div className={compact ? "" : "lg:col-span-2"}>
        <div className="flex flex-col gap-5 text-ink">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent-dark" />
            <div>
              <p className="text-sm font-medium">Dirección</p>
              <p className="text-sm text-ink-soft">{siteConfig.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 shrink-0 text-accent-dark" />
            <div>
              <p className="text-sm font-medium">Horarios</p>
              {siteConfig.schedule.map((s) => (
                <p key={s.day} className="text-sm text-ink-soft">{s.day}: {s.hours}</p>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-accent-dark" />
            <div>
              <p className="text-sm font-medium">Teléfono</p>
              <p className="text-sm text-ink-soft">{siteConfig.phone}</p>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <WhatsAppButton href={getGenericWhatsAppUrl()} />
            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <Navigation size={16} /> Cómo llegar
            </a>
          </div>
        </div>
      </div>

      <div className={compact ? "" : "lg:col-span-3"}>
        <div className={`overflow-hidden border border-line ${compact ? "h-64" : "h-80 lg:h-full"}`}>
          <iframe
            title="Ubicación en el mapa"
            src={siteConfig.googleMapsEmbedUrl}
            className="h-full w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
