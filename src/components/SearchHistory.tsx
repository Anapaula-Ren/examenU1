import '../styles/SearchHistory.css'
import { SearchChip } from './SearchChip.tsx'

export function SearchHistory() {
  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas</h2>
      <ul className="search-history__list">
        <li>
          <SearchChip />
        </li>
        <li>
          <button className="search-chip" type="button">
            dogs
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            coding
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            pizza
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            dance
          </button>
        </li>
      </ul>
    </section>
  )
}
