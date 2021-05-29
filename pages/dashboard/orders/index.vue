<template>
  <div class="w-full p-10">
    <panel-title
      title="order overview"
      subTitle="see a summary of your orders and details."
      pageName="orders"
    />
    <table class="mt-10 w-full overflow-hidden text-sm">
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
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import OrderRow from "@/components/utils/OrderRow";
import { mapState } from "vuex";
export default {
  data() {
    return {
      orders_list: []
    }
  },
  layout: "panel",
  components: {
    PanelTitle,
    OrderRow
  },
  middleware: "Auth",
  beforeMount() {
    this.orders_list = this.$store.state.panel.orders_list
  },
  methods: {
    orderClick() {
    }
  }
};
</script>

<style scoped>
* {
  @apply text-white;
}
</style>
