<template>
  <div class="container mx-auto flex items-center justify-between">
    <img
      src="~/assets/images/PlotCenter.png"
      alt="Logo"
      width="254px"
      class="cursor-pointer"
    />
    <ul class="flex items-center justify-center h-full text-white">
      <nuxt-link
        to="/"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/faq"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green"
      >
        FAQ
      </nuxt-link>
      <nuxt-link
        to="/speed-test"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green"
      >
        Speed Test
      </nuxt-link>
      <nuxt-link
        to="/about"
        tag="li"
        class="cursor-pointer h-full px-3 mx-1 hover:text-green"
      >
        About
      </nuxt-link>
    </ul>
    <div v-if="$route.path != '/register' && $route.path != '/login'">
      <button class="btn text-white rounded-lg bg-green">
        <nuxt-link to="/register">Sign up</nuxt-link>
      </button>
      <button class="btn text-white rounded-lg border-2 border-green ml-3">
        <nuxt-link to="/login">Sign in</nuxt-link>
      </button>
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
</style>
