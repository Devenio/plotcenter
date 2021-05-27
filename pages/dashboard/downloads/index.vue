<template>
  <div class="w-full p-10">
    <panel-title
      title="plots for order #855"
      subTitle="see a summary of your orders and details"
      pageName="download"
    />
    <table class="mt-10 w-full overflow-hidden text-sm text-white">
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">number</th>
        <th class="py-5 px-2 text-xs">status</th>
        <th class="py-5 px-2 text-xs">download time(max 3)</th>
        <th class="py-5 px-2 text-xs">plot phase</th>
        <th class="py-5 px-2 text-xs w-1/3 rounded-r-3xl">actions</th>
      </tr>
    </table>
  </div>
</template>

<script>
import OrderRow from '~/components/utils/OrderRow.vue';
import PanelTitle from "~/components/utils/PanelTitle.vue";
export default {
  components: { PanelTitle, OrderRow },
  layout: "panel",
  middleware: "Auth",
};
</script>

<style lang="scss" scoped></style>
