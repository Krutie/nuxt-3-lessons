<template>
  <div style="border: 2px solid yellow;">
    <pre>
      Posts from Pinia store in component:
      # of posts: {{ posts.data.length }}
    </pre>
    <slot />
  </div>
</template>
<script setup>
import { usePostStore } from '~/store/post'
const posts = usePostStore()
</script>