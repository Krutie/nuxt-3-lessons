<template>
  <div style="border: 2px solid teal; margin-bottom: 20px;">
    <pre>
      Posts from useState in component:
      # of posts: {{ posts.length }}
    </pre>
    <slot />
  </div>
</template>
<script setup>
const posts = useState('posts')
</script>