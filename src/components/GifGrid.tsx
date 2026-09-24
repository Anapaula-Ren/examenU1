import '../styles/GifGrid.css'
import { GifCard } from './GifCard.tsx'

export function GifGrid() {
  return (
    <ul className="gif-grid">
      <li>
        <GifCard />
      </li>
      <li>
        <article className="gif-card">
          <img
            className="gif-card__image"
            src="https://media.giphy.com/media/MDJ9IbxxvDUQM/200w.gif"
            alt="Cat Stare"
          />
          <div className="gif-card__body">
            <h3 className="gif-card__title">Cat Stare</h3>
            <p className="gif-card__username">@reaction</p>
          </div>
        </article>
      </li>
      <li>
        <article className="gif-card">
          <img
            className="gif-card__image"
            src="https://media.giphy.com/media/vFKqnCdLPNOKc/200w.gif"
            alt="Stretching Cat"
          />
          <div className="gif-card__body">
            <h3 className="gif-card__title">Stretching Cat</h3>
            <p className="gif-card__username">@giphy</p>
          </div>
        </article>
      </li>
      <li>
        <article className="gif-card">
          <img
            className="gif-card__image"
            src="https://media.giphy.com/media/mlvseq9yvZhba/200w.gif"
            alt="Black Cat"
          />
          <div className="gif-card__body">
            <h3 className="gif-card__title">Black Cat</h3>
            <p className="gif-card__username">@studio</p>
          </div>
        </article>
      </li>
      <li>
        <article className="gif-card">
          <img
            className="gif-card__image"
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/200w.gif"
            alt="Kitten"
          />
          <div className="gif-card__body">
            <h3 className="gif-card__title">Kitten</h3>
            <p className="gif-card__username">@giphy</p>
          </div>
        </article>
      </li>
      <li>
        <article className="gif-card">
          <img
            className="gif-card__image"
            src="https://media.giphy.com/media/3o7TKSha51ATTx9KzC/200w.gif"
            alt="Fluffy Cat"
          />
          <div className="gif-card__body">
            <h3 className="gif-card__title">Fluffy Cat</h3>
            <p className="gif-card__username">@clips</p>
          </div>
        </article>
      </li>
    </ul>
  )
}
