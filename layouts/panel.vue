<template>
  <div class="w-full min-h-screen bg-dark pt-10 overflow-hidden pb-16">
    <panel-nav />
    <div class="container flex items-start mx-auto mt-10">
      <ul>
        <li><h1 class="text-4xl text-center text-white">LOGO</h1></li>
        <panel-link path="/dashboard">
          <fa :icon="['fas', 'home']" size="lg" class="mr-3"></fa>
          dashboard
        </panel-link>
        <panel-link path="/dashboard/orders">
          <fa :icon="['fas', 'shopping-cart']" size="lg" class="mr-3"></fa>
          orders
        </panel-link>
        <panel-link path="/dashboard/downloads">
          <fa :icon="['fas', 'download']" size="lg" class="mr-3"></fa>
          downloads
        </panel-link>
        <panel-link path="/dashboard/profile">
          <fa :icon="['fas', 'user']" size="lg" class="mr-3"></fa>
          profile
        </panel-link>
        <panel-link path="/dashboard/keys">
          <fa :icon="['fas', 'key']" size="lg" class="mr-3"></fa>
          keys
        </panel-link>
        <panel-link path="/dashboard/perchase">
          <fa :icon="['fas', 'shopping-bag']" size="lg" class="mr-3"></fa>
          perchase
        </panel-link>
        <hr class="text-white opacity-50 my-10" />
        <panel-link path="/">
          <fa :icon="['fas', 'sign-out-alt']" size="lg" class="mr-3"></fa>
          exit
        </panel-link>
      </ul>
      <div
        class="flex-grow bg-sec-dark ml-3"
        style="min-height: 700px;border-radius: 65px;"
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import PanelLink from "@/components/utils/PanelLinks";

export default {
  components: {
    PanelLink
  }
};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-green;
  @apply relative;
  @apply border-l-4;
  @apply border-green;
}
</style>
