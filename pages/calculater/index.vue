<template>
  <div class="container mx-auto pb-24">
    <div class="w-full flex items-center mt-24 justify-between text-white">
      <div class="w-1/2">
        <h1 class="text-5xl font-bold capitalize">
          <span class="text-green">chia</span> calculater
        </h1>
        <h6 class="text-xl mb-3">How much can I earn farming Chia (XCH)?</h6>
        <p class="border-l-2 border-white border-opacity-25 opacity-50 pl-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src="~/assets/images/group23.svg" class="h-full p-5" alt="" />
    </div>
    <!-- <h1 class="text-5xl font-bold capitalize mt-24">
      Estimated <span class="text-green">Earnings</span>
    </h1> -->
    <h1 class="text-5xl font-bold capitalize mt-24">
      network
    </h1>
    <div
      class="mt-8 border-2 border-green rounded-3xl p-10 bg-sec-dark flex items-start justify-around"
    >
      <div class="w-1/3 flex items-center flex-col p-3 text-center">
        <span class="text-2xl">total network space</span>
        <span class="text-green text-2xl">8.513 EiB</span>
        <span>including your space</span>
      </div>
      <div class="w-1/3 flex items-center flex-col p-3 text-center">
        <span class="text-2xl">owned network space</span>
        <span class="text-green text-2xl">0.0001%</span>
      </div>
      <div class="w-1/3 flex items-center flex-col p-3 text-center">
        <span class="text-2xl">expected time to win</span>
        <span class="text-green text-2xl">5 Months</span>
      </div>
    </div>
    <h1 class="text-5xl font-bold capitalize mt-24">
      exchange rate
    </h1>
    <div class="mt-8 border-2 border-green rounded-3xl p-10 bg-sec-dark">
      <h1 class="text-2xl mb-3">€832 USD per <span class="text-green">XCH</span></h1>
      <p>Default exchange rate from Coinbase. Updated every 30 min.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
