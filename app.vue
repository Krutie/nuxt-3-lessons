<template>
  <div>
    <pre>
      {{ post.data }}
    </pre>
  </div>
</template>
<script setup>
import { usePostStore } from '~/store/post'
const post = usePostStore()
</script>