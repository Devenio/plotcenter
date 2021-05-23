<template>
  <div class="purchase-card border-2 border-green text-white shadow-xl">
    <div class="w-full p-10 flex flex-col items-center justify-center">
      <div class="relative z-10 text-center">
        <h1 class="text-6xl">{{ data.price }}$</h1>
        <span class="text-3xl line-through opacity-50" v-if="data.discount"
          >{{ data.discount }}$</span
        >
        <h3 class="text-white opacity-50 text-4xl">/PLOT</h3>
      </div>
      <img src="~/assets/images/Path.svg" alt="" class="absolute z-0" />
    </div>
    <div class="w-full p-10 pb-3">
      <div class="flex items-center justify-between">
        <div class="flex">
          <img src="~/assets/images/Location.svg" alt="" class="mr-2" />
          <h3>{{ data.name }}</h3>
        </div>
        <div
          class="flex items-center justify-center rounded-lg bg-sec-green"
          style="width: 172px; height: 43px;"
        >
          {{
            data.order_capacity > 0
              ? data.order_capacity + " plots left"
              : "sold out"
          }}
        </div>
      </div>
      <div class="h-1 w-full bg-green my-2"></div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>K-size</h3>
        <h3>{{ data.k_size }}</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>download retention</h3>
        <h3>{{ data.retention_time }}</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>download limit</h3>
        <h3>{{ data.dl_limit }} times</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>free support</h3>
        <h3>yes</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>prepration time</h3>
        <h3>{{ data.preparation_time }}</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>reverse plots</h3>
        <h3>{{ data.order_capacity }} plots</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>daily retention cost</h3>
        <h3>{{ data.daily_retention_cost }}$</h3>
      </div>
    </div>
    <div class="w-full flex items-center justify-center mb-5">
      <button
        class="capitalize p-3 text-white bg-green mx-auto rounded-xl"
        style="width: 216px;"
        v-if="data.order_capacity"
      >
        buy now
      </button>
      <button
        class="capitalize p-3 text-white bg-sec-green mx-auto rounded-xl"
        style="width: 216px;"
        v-if="!data.order_capacity"
      >
        sold out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped>
.purchase-card {
  width: 450px;
  background-color: #0e0e33;
  border-radius: 55px;
  box-shadow: 0px 0px 0px 30px #04041f42;
}
</style>
