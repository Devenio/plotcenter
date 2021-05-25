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
        <th class="py-5 px-2 text-xs">plots generating</th>
        <th class="py-5 px-2 text-xs">plots completed</th>
        <th class="py-5 px-2 text-xs w-1/3 rounded-r-3xl">actions</th>
      </tr>
      <order-row />
      <order-row />
      <order-row />
      <order-row />
      <order-row />
    </table>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import OrderRow from "@/components/utils/OrderRow";
import { mapState } from "vuex";
export default {
  layout: "panel",
  components: {
    PanelTitle,
    OrderRow
  },
  middleware: "Auth",
  computed: mapState(['panel/orders_list']),
};
</script>

<style scoped>
* {
  @apply text-white;
}
</style>
