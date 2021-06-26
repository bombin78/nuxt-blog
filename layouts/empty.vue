<template>
  <div class="empty-layout">
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(value) {
      this.$toast.error(value, {
        action: [
          {
            text: 'x',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        ],
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  width: 100%;
}
</style>
