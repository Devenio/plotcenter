<template>
  <tr
    class="text-center border-b-2 border-white border-opacity-25 hover:bg-dark cursor-pointer"
    @click="
      orderClicked(
        order.id,
        order.amount,
        order.completed,
        order.plot_count,
        order.status
      )
    "
  >
    <td class="py-6">#{{ order.id }}</td>
    <td>
      <div
        class="p-2 rounded-3xl opacity-75"
        :class="
          order.status == 'Completed'
            ? ['bg-sec-green', 'text-green']
            : 'bg-th-dark'
        "
      >
        {{ order.status }}
      </div>
    </td>
    <td>{{ order.plots_retention_days }} days</td>
    <td>{{ order.completed }}/{{ order.plot_count }}</td>
    <td>€{{ order.amount }}</td>
    <td>{{ order.location }}</td>
    <td>{{ order.wallet }}</td>
    <td>
      <button
        class="py-1 px-5 bg-green rounded-xl"
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
  },
  methods: {
    payOrder(id, wallet, pc, location, prd, amount) {
      amount = amount / pc - prd;
      this.$router.push(
        `/dashboard/purchase?step=3&id=${id}&wallet=${wallet}&pc=${pc}&loc=${location}&prd=${prd}&amount=${amount}`
      );
    },
    orderClicked(id, amount, completed, count, status) {
      if (status == "Completed") {
        this.$router.push(
          `/dashboard/orders/plots?id=${id}&amount=${amount}&co=${completed}&count=${count}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
