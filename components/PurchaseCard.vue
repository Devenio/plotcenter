<template>
  <div class="purchase-card border-2 border-green text-white shadow-xl">
    <div class="w-full p-10 flex flex-col items-center justify-center">
      <div class="relative z-10 text-center">
        <h1 class="text-6xl">13.00$</h1>
        <h3 class="text-white opacity-50 text-4xl">/PLOT</h3>
      </div>
      <img src="~/assets/images/Path.svg" alt="" class="absolute z-0" />
    </div>
    <div class="w-full p-10 pb-3">
      <div class="flex items-center justify-between">
        <div class="flex">
          <img src="~/assets/images/Location.svg" alt="" class="mr-2" />
          <h3>Europe & USA</h3>
        </div>
        <div
          class="flex items-center justify-center rounded-lg bg-sec-green"
          style="width: 172px; height: 43px;"
        >
          Sold out
        </div>
      </div>
      <div class="h-1 w-full bg-green my-2"></div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>K-size</h3>
        <h3>2G</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>download retantion</h3>
        <h3>5 days</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>download limit</h3>
        <h3>3 times</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>free support</h3>
        <h3>yes</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>prepration time</h3>
        <h3>6-12 hrs</h3>
      </div>
      <div class="flex items-center justify-between w-full py-3 capitalize">
        <h3>reverse plots</h3>
        <h3>31 plots</h3>
      </div>
    </div>
    <div class="w-full flex items-center justify-center mb-5">
      <button
        class="capitalize p-3 text-white bg-green mx-auto rounded-xl"
        style="width: 216px;"
      >
        buy now
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.purchase-card {
  width: 450px;
  background-color: #0e0e33;
  border-radius: 55px;
  box-shadow: 0px 0px 0px 30px #04041f42;
}
</style>
