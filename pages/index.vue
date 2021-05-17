<template>
  <div class="container py-3">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12	col-lg-9	col-xl-8 col-xxl-7">
        <app-post
          v-for="post in 3"
          :key="post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppPost from '@/components/main/Post.vue'

export default {
  head: {
    title: 'Главная'
  },
  components: {
    AppPost
  },
}
</script>
