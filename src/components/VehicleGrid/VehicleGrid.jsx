import VehicleCard from "../VehicleCard/VehicleCard"
import EmptyState from "../ui/EmptyState"

export default function VehicleGrid({ vehicles, emptyMessage = "No encontramos vehículos con estos criterios." }) {
  if (!vehicles.length) {
    return <EmptyState message={emptyMessage} />
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
    </div>
  )
}
