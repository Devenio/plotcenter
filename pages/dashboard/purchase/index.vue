<template>
  <div class="w-full p-10">
    <!-- steps bar -->
    <div class="w-full flex items-start justify-around text-white">
      <div class="flex items-center flex-col w-40 text-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center bg-green mb-3"
        >
          1
        </div>
        <span class="text-green text-sm">choose a key</span>
      </div>
      <div class="flex items-center flex-col w-40 text-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center bg-th-dark mb-3"
        >
          2
        </div>
        <span class="text-sm opacity-50">make an order</span>
      </div>
      <div class="flex items-center flex-col w-40 text-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center bg-th-dark mb-3"
        >
          3
        </div>
        <span class="text-sm opacity-50">click the receipt and pay</span>
      </div>
    </div>
    <!-- content -->
    <div
      class="text-center text-3xl text-white mt-10 flex items-center justify-between"
    >
      <button
        class="py-2 px-5 border-2 border-green text-lg text-white rounded-2xl justify-self-end invisible"
      >
        <fa :icon="['fas', 'angle-left']"></fa>
        Back
      </button>
      choose your key
      <button
        class="py-2 px-5 border-2 border-green text-lg text-white rounded-2xl justify-self-end"
      >
        Next
        <fa :icon="['fas', 'angle-right']"></fa>
      </button>
    </div>
    <table class="mt-10 w-full overflow-hidden text-sm text-white">
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">name</th>
        <th class="py-5 px-2 text-xs">farm key</th>
        <th class="py-5 px-2 text-xs w-1/3 rounded-r-3xl">pool key</th>
      </tr>
      <key-row v-for="key in keys" :key="key.id" :data="key" :select_option="true" :isPurchase="true" />
    </table>
  </div>
</template>

<script>
import KeyRow from "@/components/utils/KeyRow";
export default {
  layout: "panel",
  middleware: "Auth",
  components: {
    KeyRow
  },
  computed: {
    keys() {
      return this.$store.state.panel.keys;
    }
  }
};
</script>
