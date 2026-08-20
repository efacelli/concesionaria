import { useState } from "react"
import { Car } from "lucide-react"

// Imagen con estado de carga y fallback visual si la URL falla —
// evitar que se rompa el layout cuando falte una foto real del cliente.
export default function ImageWithFallback({ src, alt, className = "", imgClassName = "" }) {
  const [status, setStatus] = useState("loading")

  return (
    <div className={`relative overflow-hidden bg-line ${className}`}>
      {status !== "error" && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
      {status === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-line" />
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/5 text-ink-faint">
          <Car size={28} strokeWidth={1.5} />
          <span className="font-mono text-[10px] uppercase tracking-wider">Sin imagen</span>
        </div>
      )}
    </div>
  )
}
