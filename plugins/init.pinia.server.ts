import { usePostStore } from '~/store/post'

export default defineNuxtPlugin(async (nuxtApp) => {
  const posts = usePostStore(nuxtApp.$pinia)
  await useAsyncData('posts', () => posts.get())
})