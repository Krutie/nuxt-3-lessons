interface tag {
  key: string
}
export interface Post {
  id: number
  title: string
  body: string
  userid: number
  tags: tag[]
  reaction: number
}