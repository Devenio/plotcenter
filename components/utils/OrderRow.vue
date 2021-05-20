<template>
  <tr class="text-center border-b-2 border-white border-opacity-25">
    <td class="py-6">#855</td>
    <td>
      <div class="p-2 bg-th-dark rounded-3xl opacity-75">reserved</div>
    </td>
    <td>0</td>
    <td>0/10</td>
    <td>
      <button class="py-1 px-5 bg-green rounded-xl">Pay</button>
      <div
        class="px-2 py-1 inline rounded-xl cursor-pointer"
        style="background-color: #ff4d5460"
      >
        <fa :icon="['fas', 'trash-alt']" style="background-color: #ff4d54"></fa>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    field_1: {
      type: String,
      default: "#855"
    },
    field_2: {
      type: String,
      default: "reserved"
    },
    field_3: {
      type: Number,
      default: 0
    },
    filed_4: {
      type: String,
      default: "0/10"
    }
  }
};
</script>

<style lang="scss" scoped></style>
