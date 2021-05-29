<template>
  <div class="w-full p-10" v-if="data">
    <div class="w-full p-5 bg-sec-red text-red rounded-3xl flex items-center">
      <fa :icon="['fas', 'times-circle']" size="lg" class="mr-3"></fa>
      <div class="inline-block">
        <h2 class="text-white inline-block text-xl">
          Sorry ! Looks like there was a problem with payment !
        </h2>
        <h6 class="text-white inline-block text-sm opacity-50">
          you can continue this process again from purchase section.
        </h6>
      </div>
    </div>
    <div class="mt-5">
      <nuxt-link
        tag="button"
        to="/dashboard/purchase"
        class="py-3 px-5 bg-green text-white rounded-xl"
      >
        Back to purchase
      </nuxt-link>
      <nuxt-link
        tag="button"
        to="/dashboard/orders"
        class="py-3 px-5 rounded-xl text-white border-2 border-green ml-5"
      >
        go to orders
      </nuxt-link>
    </div>
    <div class="mt-16 w-full flex items-center justify-center">
      <img src="~/assets/images/group13.svg" />
      <img src="~/assets/images/group14.svg" />
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  layout: "panel",
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    const token = window.localStorage.getItem("token");
    console.log(token, this.$route);
    EventService.getInvoices(token, this.$route.query.ref)
      .then(res => {
        this.data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped></style>
