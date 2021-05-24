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
        <panel-link path="/dashboard/purchase">
          <fa :icon="['fas', 'shopping-bag']" size="lg" class="mr-3"></fa>
          purchase
        </panel-link>
        <hr class="text-white opacity-50 my-10" />
        <li
          class="flex items-center my-3 py-1 px-5 capitalize mt-10 cursor-pointer text-white"
          @click="logout()"
        >
          <fa :icon="['fas', 'sign-out-alt']" size="lg" class="mr-3"></fa>
          exit
        </li>
      </ul>
      <div class="flex-grow">
        <div
          class="flex-grow bg-sec-dark ml-3"
          style="min-height: 700px;border-radius: 65px;"
        >
          <Nuxt />
        </div>
        <div
          class="flex-grow bg-sec-dark ml-3"
          style="border-radius: 65px;"
          v-if="
            $route.path === '/dashboard/keys' ||
              $route.path === '/dashboard/purchase'
          "
        >
          <div class="w-full flex items-center p-10 mt-16 justify-betwen">
            <div class="w-1/2 mr-5 text-white">
              <h2 class="text-3xl mb-10">Enter your key information</h2>
              <cu-input
                label="key name"
                input_id="key-name"
                input_placeholder="choose a name for your key"
              />
              <cu-input
                label="farmer id"
                input_id="farmer-id"
                input_placeholder="enter your farmer id"
              />
              <cu-input
                label="pool id"
                input_id="pool-id"
                input_placeholder="enter your pool id"
              />
              <button class="py-2 px-5 bg-green text-white mt-10 rounded-xl">
                Add a key
                <fa :icon="['fas', 'angle-right']" size="lg" class="ml-3"></fa>
              </button>
            </div>
            <img src="~/assets/images/group12.svg" class="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PanelLink from "@/components/utils/PanelLinks";
import EventService from "@/services/EventService";
export default {
  components: {
    PanelLink
  },
  methods: {
    logout() {
      const token = this.$store.getters.token;
      EventService.logout(token)
        .then(res => {
          console.log(res);
          if (res.data.detail == "Logout successful") {
            this.$store.dispatch("clearToken");
            this.$swal.fire({
              title: "logout successfully!",
              text: "you have been logout from your account.",
              icon: "success",
              confirmButtonText: "ok",
              showCloseButton: true
            });
            this.$router.push("/");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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
