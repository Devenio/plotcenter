<template>
  <div class="container mx-auto flex items-center justify-between">
    <nuxt-link to="/">
      <img
        src="~/assets/images/PlotCenter.png"
        alt="Logo"
        width="254px"
        class="cursor-pointer"
      />
    </nuxt-link>
    <ul class="flex items-center justify-center h-full text-white">
      <nuxt-link
        to="/"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/faq"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        FAQ
      </nuxt-link>
      <nuxt-link
        to="/speed-test"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        Speed Test
      </nuxt-link>
      <nuxt-link
        to="/about"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        About
      </nuxt-link>
    </ul>
    <div v-if="$route.path != '/register' && $route.path != '/login'">
      <nuxt-link
        to="/register"
        class="btn text-white rounded-lg bg-green"
        tag="button"
        >Sign up</nuxt-link
      >
      <nuxt-link
        to="/login"
        class="btn text-white rounded-lg border-2 border-green ml-3"
        tag="button"
        >Sign in</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path);
  }
};
</script>

<style scoped>
.btn {
  width: 145px;
  height: 55px;
  outline: none;
}

.nuxt-link-exact-active.link {
  @apply text-green;
  @apply relative;
}
.nuxt-link-exact-active.link::after {
  @apply bg-green;
  @apply absolute;
  content: "";
  width: 100%;
  height: 2px;
  bottom: -10px;
  left: 0;
}
</style>
