import { defineStore } from 'pinia'
import { Post } from '@/types'

export const usePostStore = defineStore('post-store', {
  state: () => ({
    data: [] as Post[],
    title: 'my pinia store'
  }),
  actions: {

    /**
     * Fetch Posts
     * @returns array of posts of type Posts[]
     */
    async get() {
      try {
        const posts = await useFetch<Post[]>('/api/post')
        this.data = posts.data ? posts.data.value as Post[] : []
      } catch (error) {
        console.log('error in fetching posts')
      }
    }

  }
})