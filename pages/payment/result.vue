<template>
  <div class="w-full p-10" v-if="data">
    <div
      class="w-full p-5 bg-sec-red text-red rounded-3xl flex items-center"
      v-if="data.status !== 'Expired'"
    >
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
    <div
      class="w-full p-5 bg-sec-green text-green rounded-3xl flex items-center"
      v-else
    >
      <fa :icon="['fas', 'check-circle']" size="lg" class="mr-3"></fa>
      <div>
        <h2 class="text-white text-xl">
          You successfully pay your payment !
        </h2>
        <h6 class="text-white text-sm opacity-50">
          now you can check your purchases in order section.
        </h6>
      </div>
    </div>
    <div
      class="w-full p-10 bg-th-dark mt-10 rounded-3xl text-white"
      v-if="data.status === 'Expired'"
    >
      <div
        class="py-8 border-b-2 border-white border-opacity-25 flex items-center justify-between"
      >
        <div>order number</div>
        <div>{{ data.order.id }}</div>
      </div>
      <div
        class="py-8 border-b-2 border-white border-opacity-25 flex items-center justify-between"
      >
        <div>amount paid</div>
        <div>{{ data.amount }}</div>
      </div>
      <div
        class="py-8 border-b-2 border-white border-opacity-25 flex items-center justify-between"
      >
        <div>invoce number</div>
        <div>{{ data.invoice_number }}</div>
      </div>
      <div
        class="py-8 border-b-2 border-white border-opacity-25 flex items-center justify-between"
      >
        <div>paid with</div>
        <div class="flex items-center">
          <img
            :src="data.pgw.logo"
            alt=""
            style="height: 30px;"
            class=" mr-3"
          />
          {{ data.pgw.name }}
        </div>
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
      <img src="~/assets/images/group13.svg" v-if="data.status !== 'Expired'" />
      <img src="~/assets/images/group14.svg" v-else />
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
    EventService.getInvoices(token, this.$route.query.ref)
      .then(res => {
        this.data = res.data;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped></style>
