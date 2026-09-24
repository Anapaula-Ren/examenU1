import '../styles/GifCard.css'

export function GifCard() {
  return (
    <article className="gif-card">
      <img
        className="gif-card__image"
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/200w.gif"
        alt="Cat on Laptop"
      />
      <div className="gif-card__body">
        <h3 className="gif-card__title">Cat on Laptop</h3>
        <p className="gif-card__username">@giphy</p>
      </div>
    </article>
  )
}
