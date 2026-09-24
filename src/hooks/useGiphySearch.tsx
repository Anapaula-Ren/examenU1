import { useState } from 'react'
import type { Gif, GiphyResponse } from '../types/giphy'

const apiKey = import.meta.env.VITE_GIPHY_API_KEY

export function useGiphySearch() {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [query, setQuery] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function search(term: string) {
    const cleanTerm = term.trim()

    if (!cleanTerm) {
      return
    }

    setLoading(true)
    setError('')

    try {
      const url =
        `https://api.giphy.com/v1/gifs/search` +
        `?api_key=${apiKey}&q=${encodeURIComponent(cleanTerm)}&limit=12`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('No se pudieron obtener los GIFs')
      }

      const result: GiphyResponse = await response.json()

      const formattedGifs = result.data.map((gif) => ({
        id: gif.id,
        title: gif.title || 'GIF sin título',
        username: gif.username || 'Anónimo',
        imageUrl: gif.images.fixed_width.url,
      }))

      setGifs(formattedGifs)
      setQuery(cleanTerm)

      setHistory((currentHistory) => [
        cleanTerm,
        ...currentHistory.filter((item) => item !== cleanTerm),
      ])
    } catch {
      setError('Ocurrió un error al buscar GIFs')
      setGifs([])
    } finally {
      setLoading(false)
    }
  }

  return {
    gifs,
    query,
    history,
    loading,
    error,
    search,
  }
}