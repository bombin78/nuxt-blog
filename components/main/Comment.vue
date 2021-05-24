<template>
  <div class="scd-comment card">
    <div class="scd-comment__header card-header">
      <span class="scd-comment__header-name">Person name</span>
      <span class="scd-comment__header-date">
        <app-bi-icon class="scd-comment__header-clock" :type="'clock'" />
        {{ new Date().toLocaleString() }}
      </span>
    </div>
    <div class="card-body"><!--
      -->Lorem ipsum dolor sit
      amettttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt.
      Lorem, ipsum dolor.
    </div>
  </div>
</template>

<script>
import AppBiIcon from "@/components/BiIcon.vue";

export default {
  components: {
    AppBiIcon,
  },
  //props: ['comment']
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;

  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0;
  background-color: transparent;
  font-size: 0.8rem;
}

.card-body {
  font-size: 0.875rem;
  white-space: pre-line;
}

.scd-comment {
  &__header-clock {
    position: relative;
    top: -1px;
  }
}
</style>
