<template>
  <div class="app-wrapper">
    <header class ="app-header sticky-top bg-dark">
      <app-navigation />
    </header>
    <main class="app-main">
      <nuxt />
    </main>
    <footer class ="app-footer">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  </div>

</template>

<script>
import appNavigation from '@/components/main/Navigation'

export default {
  components: {
    appNavigation
  }
}
</script>
