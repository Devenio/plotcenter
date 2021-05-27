<template>
  <tr class="text-center border-b-2 border-white border-opacity-25">
    <td class="py-6">#{{ order.id }}</td>
    <td>
      <div
        class="p-2 rounded-3xl opacity-75"
        :class="order.status == 'Completed' ? ['bg-sec-green', 'text-green'] : 'bg-th-dark'"
      >
        {{ order.status }}
      </div>
    </td>
    <td>{{ order.plots_retention_days }} days</td>
    <td>{{ order.completed }}/{{ order.plot_count }}</td>
    <td>{{ order.amount }}$</td>
    <td>{{ order.location }}</td>
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
    order: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
