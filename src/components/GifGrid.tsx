import '../styles/GifGrid.css'
import { GifCard } from './GifCard'
import type { Gif } from '../types/giphy'

type GifGridProps = {
  gifs: Gif[]
}

export function GifGrid({ gifs }: GifGridProps) {
  return (
    <ul className="gif-grid">
      {gifs.map((gif) => (
        <li key={gif.id}>
          <GifCard gif={gif} />
        </li>
      ))}
    </ul>
  )
}