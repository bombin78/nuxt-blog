<template>
  <div class="wrapper">
    <header class ="header bg-dark">
      <app-navigation />
    </header>
    <main class="main">
      <nuxt />
    </main>
    <footer class ="footer">
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
