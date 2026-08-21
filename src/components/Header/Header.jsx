import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import WhatsAppIcon from "../ui/WhatsAppIcon"
import { siteConfig } from "../../config/siteConfig"
import { getGenericWhatsAppUrl } from "../../utils/whatsapp"
import logo from "../../assets/logo-autolisto.png"

const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/vehiculos", label: "Vehículos" },
  { to: "/ubicacion", label: "Ubicación" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt={siteConfig.name} className="h-10 w-auto sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `font-mono text-[13px] uppercase tracking-wider transition-colors ${
                  isActive ? "text-accent-dark border-b-2 border-accent" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={getGenericWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1FB859]"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
        </div>

        <button
          className="text-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-line/70 py-3.5 font-mono text-sm uppercase tracking-wider last:border-0 ${
                    isActive ? "text-accent-dark font-semibold" : "text-ink-soft"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={getGenericWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
            >
              <WhatsAppIcon size={18} /> Consultar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
