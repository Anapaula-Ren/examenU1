import type { FormEvent } from 'react'
import '../styles/SearchBar.css'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

export function SearchBar({
  value,
  onChange,
  onSearch,
}: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch()
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="gif-search">Buscar GIFs</label>

      <div className="search-bar__controls">
        <input
          id="gif-search"
          className="search-bar__input"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Escribe un término"
        />

        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}