import '../styles/SearchChip.css'

type SearchChipProps = {
  value: string
  active: boolean
  onClick: () => void
}

export function SearchChip({
  value,
  active,
  onClick,
}: SearchChipProps) {
  return (
    <button
      className={`search-chip ${active ? 'search-chip--active' : ''}`}
      type="button"
      aria-current={active}
      onClick={onClick}
    >
      {value}
    </button>
  )
}