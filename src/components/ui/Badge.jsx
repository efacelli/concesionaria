const variants = {
  accent: "bg-accent text-white",
  soft: "bg-accent-soft text-accent-dark",
  dark: "bg-ink text-bg",
  alert: "bg-alert text-navy-900",
  success: "bg-success text-white",
  danger: "bg-danger text-white",
  outline: "border border-line text-ink-soft",
}

export default function Badge({ children, variant = "soft", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
