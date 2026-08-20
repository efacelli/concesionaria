export function SelectField({ label, value, onChange, options, placeholder = "Todas" }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-accent"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

export function RangeField({ label, minValue, maxValue, onMinChange, onMaxChange, minPlaceholder = "Mín", maxPlaceholder = "Máx" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={minValue}
          onChange={(e) => onMinChange(e.target.value)}
          placeholder={minPlaceholder}
          className="w-full border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-accent"
        />
        <span className="text-ink-faint">–</span>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => onMaxChange(e.target.value)}
          placeholder={maxPlaceholder}
          className="w-full border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-accent"
        />
      </div>
    </div>
  )
}
