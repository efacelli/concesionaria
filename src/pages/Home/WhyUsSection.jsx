import { ShieldCheck, Users, Eye } from "lucide-react"

const reasons = [
  { icon: ShieldCheck, title: "Vehículos seleccionados", text: "Cada unidad pasa una revisión mecánica y documental antes de publicarse." },
  { icon: Users, title: "Atención personalizada", text: "Te acompañamos en todo el proceso, sin apuros ni presión de venta." },
  { icon: Eye, title: "Transparencia", text: "Kilometraje, estado y documentación reales, sin letra chica." },
]

export default function WhyUsSection() {
  return (
    <section id="por-que-elegirnos" className="bg-surface-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink/60">Nosotros</p>
        <h2 className="mt-1 font-display text-2xl font-medium text-ink sm:text-3xl">Por qué elegirnos</h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ink/20 text-accent">
                <Icon size={28} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-2xl font-medium text-ink">{title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
