import { Link } from "react-router-dom"
import { Phone, MapPin, Clock } from "lucide-react"
import { siteConfig } from "../../config/siteConfig"
import { getGenericWhatsAppUrl } from "../../utils/whatsapp"
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons"
import logo from "../../assets/logo-autolisto.png"

export default function Footer() {
  return (
    <footer id="ubicacion" className="border-t border-line bg-surface-alt text-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo} alt={siteConfig.name} className="h-12 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-ink-soft">{siteConfig.tagline}</p>
          <div className="mt-5 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-ink/15 transition-colors hover:border-accent hover:text-accent"
              >
                <InstagramIcon size={16} />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-ink/15 transition-colors hover:border-accent hover:text-accent"
              >
                <FacebookIcon size={16} />
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Navegación</p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-ink-soft">
            <Link to="/" className="hover:text-accent">Inicio</Link>
            <Link to="/vehiculos" className="hover:text-accent">Vehículos</Link>
            <Link to="/ubicacion" className="hover:text-accent">Ubicación</Link>
          </nav>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Contacto</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
            <a href={getGenericWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-accent">
              <Phone size={15} className="mt-0.5 shrink-0" /> {siteConfig.phone}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" /> {siteConfig.address}
            </p>
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">Horarios</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
            {siteConfig.schedule.map((s) => (
              <p key={s.day} className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0" />
                <span>{s.day}: {s.hours}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 px-4 py-5 text-center font-mono text-[11px] uppercase tracking-wider text-ink-faint sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name} — Todos los derechos reservados
      </div>
    </footer>
  )
}
