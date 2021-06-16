<template>
  <div class="w-full p-5 lg:p-10">
    <panel-title
      title="order overview"
      subTitle="see a summary of your orders and details."
      pageName="orders"
    />
    <table class="mt-10 w-full overflow-hidden text-sm hidden lg:table">
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">key names</th>
        <th class="py-5 px-2 text-xs">status</th>
        <th class="py-5 px-2 text-xs">retention</th>
        <th class="py-5 px-2 text-xs">completed</th>
        <th class="py-5 px-2 text-xs">amount</th>
        <th class="py-5 px-2 text-xs">location</th>
        <th class="py-5 px-2 text-xs">wallet</th>
        <th class="py-5 px-2 text-xs rounded-r-3xl">actions</th>
      </tr>
      <order-row
        v-for="order in orders_list"
        :key="order.id"
        :data-id="order.id"
        :order="order"
      />
    </table>

    <div
      v-for="order in orders_list"
      :key="order.id"
      class="w-full rounded-lg my-3 p-3 px-5 bg-dark lg:hidden"
    >
      <div class="flex justify-between items-center">
        <div class="text-center text-sm">
          key name:
          <br />
          #{{ order.id }}
        </div>
        <div class="text-center text-sm">
          status
          <br />
          <div
            class="p-2 rounded-lg text-sm opacity-75"
            :class="
              order.status == 'Completed'
                ? ['bg-sec-green', 'text-green']
                : 'bg-th-dark'
            "
          >
            {{ order.status }}
          </div>
        </div>
        <div
          class="w-10 h-10 rounded-full bg-sec-green flex items-center justify-center text-green"
          @click="openUM = order.id"
        >
          <fa :icon="['fas', 'angle-down']" />
        </div>
      </div>
      <div
        class="mx-3 mt-5 text-sm divide-y-2 divide-opacity-25 divide-white"
        v-if="openUM == order.id"
      >
        <div class="flex items-center py-5 justify-between">
          completed
          <span>{{ order.completed }}/{{ order.plot_count }}</span>
        </div>
        <div class="flex items-center py-5 justify-between">
          amount
          <span>€{{ order.amount }}</span>
        </div>
        <div class="flex items-center py-5 justify-between">
          actions
          <button
            class="py-1 px-3 bg-green rounded-lg text-sm"
            @click="
              payOrder(
                order.id,
                order.wallet,
                order.plot_count,
                order.location,
                order.plots_retention_days - 5,
                order.amount
              )
            "
          >
            pay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import OrderRow from "@/components/utils/OrderRow";
import { mapState } from "vuex";
export default {
  data() {
    return {
      orders_list: [],
      openUM: NaN
    };
  },
  layout: "panel",
  components: {
    PanelTitle,
    OrderRow
  },
  middleware: "Auth",
  beforeMount() {
    this.orders_list = this.$store.state.panel.orders_list;
  },
  methods: {
    payOrder(id, wallet, pc, location, prd, amount) {
      amount = amount / pc - prd;
      this.$router.push(
        `/dashboard/purchase?step=3&id=${id}&wallet=${wallet}&pc=${pc}&loc=${location}&prd=${prd}&amount=${amount}`
      );
    }
  }
};
</script>

<style scoped>
* {
  @apply text-white;
}
</style>
