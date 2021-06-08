<template>
  <div>
    <div
      class="container mx-auto flex items-center justify-between px-3 lg:px-0"
    >
      <fa :icon="['fas', 'bars']" size="2x" class="text-green lg:hidden" @click="open = !open" />
      <nuxt-link to="/">
        <img
          src="~/assets/images/PlotCenter.png"
          alt="Logo"
          class="cursor-pointer logo"
        />
      </nuxt-link>
      <ul class="items-center justify-center h-full text-white hidden lg:flex">
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
          to="/calculater"
          tag="li"
          class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
        >
          Calculater
        </nuxt-link>
        <nuxt-link
          to="/about"
          tag="li"
          class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
        >
          About
        </nuxt-link>
        <nuxt-link
          to="/notif"
          tag="li"
          class="cursor-pointer h-full px-3 mx-1 hover:text-green link"
        >
          Notification
        </nuxt-link>
      </ul>
      <div v-if="$route.path != '/register' && $route.path != '/login'">
        <nuxt-link
          to="/register"
          class="btn text-white rounded-lg text-xs lg:text-base py-2 px-3 bg-green"
          tag="button"
          >Sign up</nuxt-link
        >
        <nuxt-link
          to="/login"
          class="btn text-white rounded-lg text-xs lg:text-base py-2 px-3 border-2 border-green ml-3"
          tag="button"
          >Sign in</nuxt-link
        >
      </div>
    </div>
    <div class="w-full flex flex-col items-center bg-sec-dark mt-3 lg:hidden overflow-hidden" :class="open ? ['h-auto'] : ['h-0']" >
      <nuxt-link
        to="/"
        class="w-full text-center my-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/faq"
        class="w-full text-center my-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        FAQ
      </nuxt-link>
      <nuxt-link
        to="/calculater"
        class="w-full text-center my-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        Calculater
      </nuxt-link>
      <nuxt-link
        to="/about"
        class="w-full text-center my-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        About
      </nuxt-link>
      <nuxt-link
        to="/notif"
        class="w-full text-center my-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        Notification
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
};
</script>

<style scoped>
.btn {
  /* width: 40px;
  height: 20px;
  outline: none; */
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
.logo {
  width: 100px;
}
@media screen and (min-width: 1024px) {
  .logo {
    width: 250px;
  }
  .btn {
    width: 145px;
    height: 55px;
    outline: none;
  }
}
</style>
