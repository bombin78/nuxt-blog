<template>
  <article class="post">

    <header class="post-header">

      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>

      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString()}}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>

      <div class="post-image">
        <img
          src="https://wallbox.ru/resize/800x480/wallpapers/main2/201726/14986676245953da68df7d32.08263646.jpg"
          alt="Горное озеро">
      </div>

    </header>

    <main class="post-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </main>

    <footer>

        <div class="comments" v-if="true">
          <app-comment
            v-for="comment in 4"
            :key="comment"
            :comment="comment" />
        </div>
        <div class="text-center" v-else>
          Комментариев нет
        </div>
    </footer>

  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
export default {
  validate({params}) {
    return Boolean(params.id);
  },
  components: {
    AppComment,
  },
}
</script>

<style lang="scss" scoped>

.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
}

.post-image img{
  width: 100%;
  height: auto;
}

.post-content {
  margin-bottom: 2rem;
}

</style>
