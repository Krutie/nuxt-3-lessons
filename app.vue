<template>
  <div style="margin:20px;">
    <PostsUseState>
      <pre>
        Posts from app.vue (useState)
        {{ posts.length }}
      </pre>
    </PostsUseState>
    <PostsPinia>
      <pre>
        Posts from app.vue (Pinia)
        {{ post.data.length }}
      </pre>
    </PostsPinia>
  </div>
</template>
<script setup lang="ts">
import { Post } from '~/types'
import { usePostStore } from '~/store/post'

/**
 * Pinia store state with server-side data
*/
const post = usePostStore()

/**
 * useState data called on app.vue - after setting it on server-side Nuxt plugin
*/
const posts = useState('posts')
// console.log(posts.value)


/**
 * useState called directly on app.vue
*/
// const usePost = () => useState<Post[] | null>('blahs', () => {
//   const posts = useFetch<Post[]>('/api/post')
//   return posts?.data || null
// })
// const posts = usePost()


</script>