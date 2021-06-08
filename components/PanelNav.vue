<template>
  <div>
    <div
      class="container text-white mx-auto flex px-5 lg:px-0 items-center justify-between"
    >
      <!-- <nuxt-link to="/"> -->
      <img
        src="~/assets/images/PlotCenter.png"
        alt="Logo"
        width="254px"
        class="cursor-pointer hidden lg:block"
      />
      <fa
        :icon="['fas', 'bars']"
        size="2x"
        class="lg:hidden"
        @click="open = !open"
      />
      <!-- </nuxt-link> -->
      <div>
        <div
          class="flex items-center jsutify-center py-3 px-5 bg-sec-dark rounded-xl"
          @click="isOpen = !isOpen"
        >
          <img src="~/assets/icons/user.svg" class="mr-3" />
          <h3 class="text-sm">Nima shahbazi</h3>
          <div
            :class="isOpen ? 'arrow-up' : 'arrow-down'"
            class="ml-3 cursor-pointer"
          ></div>
        </div>
        <div v-if="isOpen" class="absolute rounded-xl bg-sec-dark mt-3 p-5">
          <div
            class="flex items-center py-2 px-4 border-2 border-green rounded-xl cursor-pointer"
            @click="$router.push('/dashboard/profile')"
          >
            <img src="~/assets/icons/user2.svg" class="mr-3" />
            <h3 class="text-sm">edit profile</h3>
          </div>
          <div
            class="flex items-center py-2 px-4 border-2 border-green rounded-xl cursor-pointer mt-3"
            @click="logout()"
          >
            <img src="~/assets/icons/Logout.svg" class="mr-3" />
            <h3 class="text-sm">exit</h3>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full flex flex-col items-center bg-sec-dark mt-3 lg:hidden overflow-hidden"
      :class="open ? ['h-auto'] : ['h-0']"
    >
      <nuxt-link
        to="/dashboard"
        class="w-full text-white text-center py-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        <fa :icon="['fas', 'home']" class="mr-3"></fa>
        dashboard
      </nuxt-link>
      <nuxt-link
        to="/dashboard/orders"
        class="w-full text-white text-center py-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        <fa :icon="['fas', 'shopping-cart']" class="mr-3"></fa>
        orders
      </nuxt-link>
      <nuxt-link
        to="/dashboard/downloads"
        class="w-full text-white text-center py-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        <fa :icon="['fas', 'download']" class="mr-3"></fa>
        downloads
      </nuxt-link>
      <nuxt-link
        to="/dashboard/profile"
        class="w-full text-white text-center py-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        <fa :icon="['fas', 'user']" class="mr-3"></fa>
        profile
      </nuxt-link>
      <nuxt-link
        to="/dashboard/keys"
        class="w-full text-white text-center py-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        <fa :icon="['fas', 'key']" class="mr-3"></fa>
        keys
      </nuxt-link>
      <nuxt-link
        to="/dashboard/purchase"
        class="w-full text-white text-center py-3 cursor-pointer h-full px-3 mx-1 hover:text-green link"
      >
        <fa :icon="['fas', 'shopping-bag']" class="mr-3"></fa>
        purchase
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      open: false
    };
  },
  methods: {
    logout() {
      const token = this.$store.getters.token;
      EventService.logout(token)
        .then(res => {
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
* {
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #fff;
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #fff;
}
.nuxt-link-exact-active {
  @apply text-green border-b-2 border-green border-opacity-50;
}
</style>
