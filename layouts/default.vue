<template>
  <div class="w-full min-h-screen bg-dark pt-10">
    <nav-bar />
    <Nuxt />
    <app-footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
* {
  font-family: 'Montserrat', sans-serif;
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
