import '../styles/SearchBar.css'

export function SearchBar() {
  return (
    <form
      className="search-bar"
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <label className="search-bar__label" htmlFor="gif-search">
        Buscar GIFs
      </label>
      <div className="search-bar__controls">
        <input
          id="gif-search"
          className="search-bar__input"
          type="search"
          name="query"
          defaultValue="cats"
          placeholder="Escribe un término, por ejemplo: cats"
        />
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}
