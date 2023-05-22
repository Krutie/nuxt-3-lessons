import { Post } from '~/types'

const usePost = () => useState<Post[] | null>('posts', () => {
  const posts = useFetch<Post[]>('/api/post')
  return posts?.data || null
})


export default defineNuxtPlugin(() => {
  const posts = usePost()
})