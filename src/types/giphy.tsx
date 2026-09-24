export type Gif = {
  id: string
  title: string
  username: string
  imageUrl: string
}

export type GiphyResponse = {
  data: Array<{
    id: string
    title: string
    username: string
    images: {
      fixed_width: {
        url: string
      }
    }
  }>
}