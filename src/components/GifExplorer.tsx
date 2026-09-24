import '../styles/GifExplorer.css'
import { GifGrid } from './GifGrid'
import { SearchBar } from './SearchBar'
import { SearchHistory } from './SearchHistory'
import { useGiphySearch } from '../hooks/useGiphySearch'


export function GifExplorer() {
  const {
    gifs,
    query,
    history,
    loading,
    error,
    search,
  } = useGiphySearch()

   return (
    <main className="gif-explorer">
      <header className="gif-explorer__header">
        <p className="gif-explorer__kicker">Giphy</p>
        <h1>Buscador de GIFs</h1>
        <p className="gif-explorer__subtitle">
          Escribe un término, revisa los resultados y conserva cada búsqueda.
        </p>
      </header>

      <SearchBar onSearch={search} initialValue={query} />

      <SearchHistory
        history={history}
        activeQuery={query}
        onSelect={search}
      />

      <section className="gif-explorer__results">
        <div className="gif-explorer__results-header">
          <h2>Resultados para «{query}»</h2>
          <p>{gifs.length} GIFs</p>
        </div>

        {loading && <p>Cargando GIFs...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <GifGrid gifs={gifs} />}
      </section>
    </main>
  )
}