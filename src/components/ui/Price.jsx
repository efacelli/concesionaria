// Único componente que renderiza precios. Si showPrices es false, no
// renderiza nada (ni siquiera un espacio vacío) — así ningún consumidor
// necesita chequear la config manualmente.
import { siteConfig } from "../../config/siteConfig"
import { formatPrice } from "../../utils/format"

export default function Price({ value, className = "" }) {
  if (!siteConfig.showPrices) return null
  return <span className={className}>{formatPrice(value)}</span>
}
