<template>
  <div>
    <h1>Welcome to admin page</h1>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
};
</script>
