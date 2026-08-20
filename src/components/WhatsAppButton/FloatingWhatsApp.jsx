import { getGenericWhatsAppUrl } from "../../utils/whatsapp"
import WhatsAppIcon from "../ui/WhatsAppIcon"

// Botón flotante visible en toda la web, fácil de tocar en mobile.
export default function FloatingWhatsApp() {
  return (
    <a
      href={getGenericWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon size={30} />
    </a>
  )
}
