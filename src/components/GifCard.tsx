import '../styles/GifCard.css'
import type { Gif } from '../types/giphy'

type GifCardProps = {
  gif: Gif
}

export function GifCard({ gif }: GifCardProps) {
  return (
    <article className="gif-card">
      <img
        className="gif-card__image"
        src={gif.imageUrl}
        alt={gif.title}
      />

      <div className="gif-card__body">
        <h3 className="gif-card__title">{gif.title}</h3>
        <p className="gif-card__username">
          @{gif.username}
        </p>
      </div>
    </article>
  )
}