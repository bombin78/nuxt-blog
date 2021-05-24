<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Post title</h3>
      <small>
        <app-bi-icon :type="'clock'" />
        {{ new Date().toLocaleString() }}
      </small>
    </div>

    <div class="card-body">
      <img class="card-img-top" src="/images/berlin.jpg" alt="post images" />
    </div>

    <div class="card-footer">
      <button
        class="btn btn-outline-secondary btn-sm"
        type="button"
        @click="openPost"
      >
        Открыть
      </button>

      <span>
        <app-bi-icon :type="'envelope'" />
        12
      </span>
    </div>
  </div>
</template>

<script>
import AppBiIcon from "@/components/BiIcon.vue";

export default {
  components: {
    AppBiIcon,
  },
  methods: {
    openPost() {
      const id = "test-id";
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1.5rem;

  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: {
    top: 0.875rem;
    bottom: 0.875rem;
  }

  background-color: transparent;

  ::v-deep .bi-clock {
    position: relative;
    top: -1px;
    width: 0.875rem;
    height: 0.875rem;
  }
}

.card-title {
  margin-bottom: 0;
}

.card-body {
  padding-bottom: 0.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: {
    top: 1rem;
    bottom: 1rem;
  }

  background-color: transparent;
  border-top: 0;
  font-size: 0.875rem;
}
</style>
