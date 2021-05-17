<template>
  <div class="post card mb-4">

    <div class="card-header bg-transparent d-flex justify-content-between align-items-center py-3">
      <h3 class="card-title mb-0">Post title</h3>
      <small>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
        </svg>
        {{ new Date().toLocaleString() }}
      </small>
    </div>

    <div class="card-body pb-1">
      <img class="card-img-top" src="/images/berlin.jpg" alt="post images">
    </div>

    <div class="card-footer bg-transparent d-flex justify-content-between align-items-center border-top-0 py-3">

      <button
        class="btn btn-outline-secondary rounded-pill"
        type="button"
        @click="openPost">Открыть</button>

      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
        </svg>
        12
      </span>

    </div>

  </div>
</template>

<script>
export default {
  methods: {
    openPost() {

    },
  }
};
</script>

<style lang="scss" scoped>
.post {
  &:hover {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  }
}
</style>
