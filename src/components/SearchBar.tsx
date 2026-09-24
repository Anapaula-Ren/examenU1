import { useState } from 'react'
import '../styles/SearchBar.css'

type SearchBarProps = {
  onSearch: (term: string) => void
  initialValue: string
}

export function SearchBar({
  onSearch,
  initialValue,
}: SearchBarProps) {
  const [term, setTerm] = useState(initialValue)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(term)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="gif-search">Buscar GIFs</label>

      <div className="search-bar__controls">
        <input
          id="gif-search"
          className="search-bar__input"
          type="search"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          placeholder="Escribe un término"
        />

        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}