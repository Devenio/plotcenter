<template>
  <div class="w-full min-h-screen bg-dark pt-5 lg:pt-10 overflow-hidden">
    <nav-bar />
    <Nuxt />
    <app-footer v-if="$route.path != '/login' && $route.path != '/register'" />
  </div>
</template>

<style scoped>
* {
  @apply text-white;
}
</style>
