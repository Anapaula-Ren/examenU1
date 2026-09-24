import '../styles/SearchHistory.css'
import { SearchChip } from './SearchChip'

type SearchHistoryProps = {
  history: string[]
  activeQuery: string
  onSelect: (term: string) => void
}

export function SearchHistory({
  history,
  activeQuery,
  onSelect,
}: SearchHistoryProps) {
  return (
    <section className="search-history">
      <h2 className="search-history__title">Búsquedas</h2>

      <ul className="search-history__list">
        {history.map((term) => (
          <li key={term}>
            <SearchChip
              value={term}
              active={term === activeQuery}
              onClick={() => onSelect(term)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}