import { SearchX } from "lucide-react"

export default function EmptyState({ message, action }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 border border-dashed border-line py-20 text-center">
      <SearchX size={32} strokeWidth={1.5} className="text-ink-faint" />
      <p className="max-w-xs text-sm text-ink-soft">{message}</p>
      {action}
    </div>
  )
}
