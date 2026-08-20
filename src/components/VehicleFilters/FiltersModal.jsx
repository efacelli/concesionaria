import { useEffect } from "react"
import { createPortal } from "react-dom"
import VehicleFilters from "./VehicleFilters"

// Modal de filtros para mobile. Se monta vía portal para evitar problemas
// de stacking/overflow con el resto del layout.
export default function FiltersModal({ open, onClose, ...filterProps }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-end md:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative max-h-[85vh] w-full overflow-y-auto bg-surface p-5 pb-8 shadow-2xl filters-scroll">
        <VehicleFilters {...filterProps} onClose={onClose} />
        <button
          onClick={onClose}
          className="mt-6 w-full bg-ink py-3 text-sm font-medium text-bg"
        >
          Ver resultados
        </button>
      </div>
    </div>,
    document.body
  )
}
