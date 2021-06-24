<template>
  <div class="scd-wrapper">
    <div class="container-fluid">
      <div class="row">

        <aside class="scd-aside">
          <app-aside />
        </aside>

        <main class="scd-main">
          <nuxt />
        </main>

      </div>
    </div>
  </div>
</template>

<script>
import AppAside from '@/components/admin/Aside.vue';

export default {
  components: {
    AppAside,
  },
  mounted() {
    this.$toast.clear();
  },
};
</script>

<style lang="scss" scoped>

.scd-wrapper {
  display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.container-fluid {
  flex: 1 0 auto;
  display: flex;
}

.row {
  flex-wrap: nowrap;
  width: 100%;
}

.scd-aside {
  flex: 0 0 250px;
  padding: 0;

  border-right: 1px solid #ddd;
}

.scd-main {
  flex: 0 1 100%;
}

</style>
