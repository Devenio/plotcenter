<template>
  <div class="w-full p-10">
    <panel-title
      title="manage your Keys"
      subTitle="Add , Delete and manage your kyes"
      pageName="keys"
    />
    <table class="mt-10 w-full overflow-hidden text-sm text-white">
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">name</th>
        <th class="py-5 px-2 text-xs">farmeer id</th>
        <th class="py-5 px-2 text-xs">pool id</th>
        <th class="py-5 px-2 text-xs rounded-r-3xl">actions</th>
      </tr>
      <key-row />
      <key-row />
      <key-row />
    </table>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import KeyRow from "@/components/utils/KeyRow";
export default {
  layout: "panel",
  middleware: "Auth",
  components: {
    PanelTitle,
    KeyRow
  }
};
</script>

<style lang="scss" scoped></style>
