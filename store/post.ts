import { defineStore } from 'pinia'
import { Post } from '@/types'
console.log('process.server')
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
        const response = await useFetch('https://dummyjson.com/posts')
        this.data = response.data.value ? response.data.value.posts : []
      } catch (error) {
        console.log('error in fetching posts')
      }
    }

  }
})