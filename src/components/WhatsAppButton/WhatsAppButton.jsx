import WhatsAppIcon from "../ui/WhatsAppIcon"

// Botón de WhatsApp reutilizable. Recibe la URL ya armada por
// src/utils/whatsapp.js — no arma links propios.
export default function WhatsAppButton({
  href,
  children = "Consultar por WhatsApp",
  variant = "solid",
  className = "",
  size = "md",
}) {
  const sizes = {
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  }
  const variants = {
    solid: "bg-[#25D366] text-white hover:bg-[#1FB859]",
    outline: "border border-current text-ink hover:bg-ink hover:text-bg",
    light: "bg-white text-navy-900 hover:bg-white/90",
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-medium transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon size={20} />
      {children}
    </a>
  )
}
