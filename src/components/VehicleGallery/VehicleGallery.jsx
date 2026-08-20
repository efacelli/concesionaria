import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ImageWithFallback from "../ui/ImageWithFallback"

export default function VehicleGallery({ images, alt }) {
  const [active, setActive] = useState(0)

  function prev() {
    setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  }
  function next() {
    setActive((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden bg-line sm:aspect-[16/10]">
        <ImageWithFallback src={images[active]} alt={`${alt} — foto ${active + 1}`} className="h-full w-full" />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-surface/90 text-ink shadow transition-transform hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-surface/90 text-ink shadow transition-transform hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>
            <span className="absolute bottom-3 right-3 bg-ink/80 px-2 py-1 font-mono text-[11px] text-bg">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setActive(i)}
              className={`h-16 w-20 shrink-0 overflow-hidden border-2 transition-colors ${
                i === active ? "border-accent" : "border-transparent"
              }`}
            >
              <ImageWithFallback src={img} alt={`Miniatura ${i + 1}`} className="h-full w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
