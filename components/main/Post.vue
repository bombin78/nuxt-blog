<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString()}}</small>
    </header>
    <div class="post-body">
      <img
        src="https://wallbox.ru/resize/800x480/wallpapers/main2/201726/14986676245953da68df7d32.08263646.jpg"
        alt="Морская крепость Свеаборг"
        class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {}
  },
}
</script>

<style lang="scss" scoped>

  .post {
    margin-bottom: 1.5rem;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-img {
    width: 100%;
    height: auto;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>
