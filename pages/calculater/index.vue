<template>
  <div class="container mx-auto pb-24">
    <div
      class="w-full flex flex-col-reverse lg:flex-row items-center mt-10 lg:mt-24 justify-between text-white"
    >
      <div class="lg:w-1/2 text-center lg:text-left">
        <h1 class="text-xl lg:text-5xl font-bold capitalize">
          <span class="text-green">chia</span> calculater
        </h1>
        <h6 class="lg:text-xl mb-3 px-3">
          How much can I earn farming Chia (XCH)?
        </h6>
        <p
          class="border-l-2 px-3 border-white border-opacity-25 opacity-50 lg:pl-5 text-sm lg:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
      <img src="~/assets/images/group23.svg" class="h-full p-5" alt="" />
    </div>
    <!-- <h1 class="text-5xl font-bold capitalize mt-24">
      Estimated <span class="text-green">Earnings</span>
    </h1> -->
    <h1
      class="text-xl lg:text-5xl font-bold capitalize mt-16 ml-3 lg:ml-0 lg:mt-24"
    >
      network
    </h1>
    <div
      class="mt-8 border-2 lg:divide-y-0 divide-y-2 divide-green divide-opacity-25 border-green rounded-lg mx-3 lg:p-10 bg-sec-dark flex flex-col lg:flex-row items-center lg:items-start justify-around"
    >
      <div class="lg:w-1/3 flex py-5 lg:py-0 items-center lg:flex-col p-3 lg:text-center">
        <span class="lg:text-2xl">total network space</span>
        <span class="text-green lg:text-2xl">8.513 EiB</span>
        <span class="hidden lg:block">including your space</span>
      </div>
      <div class="lg:w-1/3 flex py-5 lg:py-0 items-center lg:flex-col p-3 lg:text-center">
        <span class="lg:text-2xl">owned network space</span>
        <span class="text-green lg:text-2xl">0.0001%</span>
      </div>
      <div class="lg:w-1/3 flex py-5 lg:py-0 items-center lg:flex-col p-3 lg:text-center">
        <span class="lg:text-2xl">expected time to win</span>
        <span class="text-green lg:text-2xl">5 Months</span>
      </div>
    </div>
    <h1 class="text-xl lg:text-5xl font-bold capitalize mt-16 ml-3 lg:ml-0 lg:mt-24">
      exchange rate
    </h1>
    <div class="mt-8 border-2 border-green rounded-lg p-5 mx-3 lg:mx-0 lg:p-10 bg-sec-dark">
      <h1 class="text-xl lg:text-2xl mb-3">
        €832 USD per <span class="text-green">XCH</span>
      </h1>
      <p class="opacity-50 text-sm">Default exchange rate from Coinbase. Updated every 30 min.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
