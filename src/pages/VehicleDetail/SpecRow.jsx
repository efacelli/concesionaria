export default function SpecRow({ label, value }) {
  if (value == null || value === "") return null
  return (
    <div className="flex items-center justify-between border-b border-line py-3 text-sm last:border-0">
      <span className="text-ink-faint">{label}</span>
      <span className="spec-plate font-medium text-ink">{value}</span>
    </div>
  )
}
