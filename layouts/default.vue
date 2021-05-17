<template>
  <div class="w-full min-h-screen bg-dark pt-10 overflow-hidden">
    <nav-bar />
    <Nuxt />
    <app-footer v-if="$route.path != '/login' && $route.path != '/register'" />
  </div>
</template>

<style scoped>
* {
  @apply text-white;
}
.nuxt-link-exact-active {
  @apply text-green;
  @apply relative;
}
.nuxt-link-exact-active::after {
  @apply bg-green;
  @apply absolute;
  content: "";
  width: 100%;
  height: 2px;
  bottom: -10px;
  left: 0;
}
</style>
