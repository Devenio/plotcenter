<template>
  <div class="w-full min-h-screen bg-dark pt-5 lg:pt-10 overflow-hidden lg:pb-16">
    <panel-nav />
    <div class="container flex items-start mx-auto mt-3 lg:mt-10">
      <ul class="hidden lg:block">
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
      <div class="lg:flex-grow">
        <div
          class="flex-grow bg-sec-dark lg:ml-3 lg:rounded-3xl"
          style="min-height: 700px;"
        >
          <keep-alive>
            <Nuxt />
          </keep-alive>
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
              <div class="flex flex-col mt-3">
                <label for="key-name" class="opacity-75 capitalize">
                  key name
                </label>
                <input
                  type="text"
                  class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
                  placeholder="choose a name for your key"
                  id="key-name"
                />
              </div>
              <div class="flex flex-col mt-3">
                <label for="farmer-id" class="opacity-75 capitalize">
                  farmer id
                </label>
                <input
                  type="text"
                  class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
                  placeholder="enter your farmer id"
                  id="farmer-id"
                  v-model="farmer_pk"
                />
              </div>
              <div class="flex flex-col mt-3">
                <label for="pool-id" class="opacity-75 capitalize">
                  pool id
                </label>
                <input
                  type="text"
                  class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
                  placeholder="enter your pool id"
                  id="pool-id"
                  v-model="pool_pk"
                />
              </div>
              <button
                class="py-2 px-5 bg-green text-white mt-10 rounded-xl"
                @click="checkValues()"
              >
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
  data() {
    return {
      pool_pk: "",
      farmer_pk: ""
    };
  },
  components: {
    PanelLink
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
    },
    checkValues() {
      if (!this.pool_pk || !this.farmer_pk) {
        this.$swal({
          title: "Error!",
          text: "plese fill out all the fields.",
          showCloseButton: true,
          icon: "error"
        });
      } else {
        this.createKey();
      }
    },
    createKey() {
      const token = this.$store.getters.token;
      EventService.createKey(token, this.pool_pk, this.farmer_pk)
        .then(res => {
          this.$swal({
            title: "Key created successfully!",
            icon: "success",
            showCloseButton: true
          });
          this.pool_pk = this.farmer_pk = "";
          this.$store.dispatch("panel/setKeys", token);
        })
        .catch(err => {
          if (err.message.includes("400")) {
            this.$swal({
              title: "Error!",
              text: "invalid pool or farmer key.",
              icon: "error",
              showCloseButton: true
            });
          }
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
