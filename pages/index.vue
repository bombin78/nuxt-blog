<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12	col-lg-9 col-xl-8 col-xxl-7">
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

<style lang="scss" scoped>
.container {
  padding: {
    top: 1rem;
    bottom: 1rem;
  }
}

.row {
  justify-content: center;
}
</style>
