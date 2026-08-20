import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import { siteConfig } from "../../config/siteConfig"
import { getFeaturedVehicles, getLatestVehicles } from "../../utils/vehicleQueries"
import Hero from "./Hero"
import FeaturedSection from "./FeaturedSection"
import LatestArrivalsSection from "./LatestArrivalsSection"
import WhyUsSection from "./WhyUsSection"
import LocationInfo from "../../components/LocationInfo/LocationInfo"

export default function Home() {
  useDocumentTitle("Inicio", `${siteConfig.name} — ${siteConfig.tagline}. Catálogo de vehículos usados seleccionados.`)

  const featured = getFeaturedVehicles(6)
  const latest = getLatestVehicles(3)

  return (
    <>
      <Hero />
      <FeaturedSection vehicles={featured} />
      <LatestArrivalsSection vehicles={latest} />
      <WhyUsSection />
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Visitanos</p>
          <h2 className="mt-1 font-display text-2xl font-medium text-ink sm:text-3xl">Ubicación</h2>
          <div className="mt-8">
            <LocationInfo compact />
          </div>
        </div>
      </section>
    </>
  )
}
