<template>
  <div class="container mx-auto">
    <img
      src="~/assets/images/Titlesvg.svg"
      alt=""
      class="mt-32 mb-24 mx-auto"
    />
    <div class="w-full text-center">
      <div class="mx-auto w-3/4">
        <h3 class="text-white opacity-50">About Chia</h3>
        <h1 class="text-white text-6xl">
          What is <span class="text-green">Chia</span> plots?
        </h1>
        <div class="w-1/2 bg-green mx-auto" style="height: 6px;"></div>
        <p class="text-white opacity-50 w-3/4 mx-auto mt-8 leading-8">
          Want to farm on the Chia network but don't feel like getting specific
          hardware just for plotting? Tell us how many plots you want and we
          will get you a download link within 24 hours. No technical skills
          necessary!
        </p>
      </div>
    </div>
    <div class="w-full text-center mt-32">
      <div class="mx-auto w-3/4">
        <h3 class="text-white opacity-50">Our Service</h3>
        <h1 class="text-white text-6xl">
          It's Time For Purchase
        </h1>
        <div class="w-1/2 bg-green mx-auto" style="height: 6px;"></div>
      </div>
    </div>
    <div class="w-full mt-16 flex justify-center">
      <purchase-card class="transform translate-x-6 scale-95" />
      <purchase-card class="relative z-50" />
      <purchase-card class="transform -translate-x-6 scale-95" />
    </div>
    <div
      class="w-full p-10 bg-sec-green my-24 flex items-center justify-between text-white"
      style="border-radius: 45px;"
    >
      <div class="w-2/5">
        <p class="text-6xl font-semibold" style="line-height: 4rem;">
          Sign up and earn a <span class="text-green">free</span> plot !
        </p>
        <button
          class="text-white bg-green card rounded-3xl text-2xl mt-10"
          style="width: 277px; height: 85px;"
        >
          sign up now
        </button>
      </div>
      <img src="~/assets/images/gift-box.svg" alt="" />
    </div>
    <div class="w-full text-center">
      <div class="mx-auto w-3/4">
        <h3 class="text-white opacity-50">your journey</h3>
        <h1 class="text-white text-6xl">
          With Only <span class="text-green">3</span> Easy Steps
        </h1>
        <div class="w-1/2 bg-green mx-auto" style="height: 6px;"></div>
        <div class="mt-16 w-full">
          <img src="~/assets/images/ways.svg" alt="" />
          <div class="w-full flex items-center justify-between mt-5">
            <div class="w-1/3 transform -translate-x-32">
              <h2 class="text-white capitalize">sign up</h2>
              <h3 class="text-white opacity-75 text-sm mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi laboriosam rem vel quis autem.
              </h3>
            </div>
            <div class="w-1/3">
              <h2 class="text-white capitalize">make payment</h2>
              <h3 class="text-white opacity-75 text-sm mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi laboriosam rem vel quis autem.
              </h3>
            </div>
            <div class="w-1/3 transform translate-x-32">
              <h2 class="text-white capitalize">wait for preparing</h2>
              <h3 class="text-white opacity-75 text-sm mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi laboriosam rem vel quis autem.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center mt-32">
        <div class="mx-auto w-3/4">
          <h3 class="text-white opacity-50">with you in all steps</h3>
          <h1 class="text-white text-6xl">
            how does it work?
          </h1>
          <div class="w-1/2 bg-green mx-auto" style="height: 6px;"></div>
          <div class="w-full flex items-center justify-between mt-16">
            <div class="flex flex-wrap items-center" style="width: 360px;">
              <div
                class="flex items-center justify-center text-white text-4xl m-1"
                style="width: 170px; height: 170px; border-radius:42px;"
                v-for="i in 4"
                :key="i"
                :class="i === 1 ? 'bg-green' : ['border-2', 'border-white']"
                :style="i % 2 === 0 ? 'transform: translateY(40px)' : ''"
              >
                Step {{ i }}
              </div>
            </div>
            <div class="w-1/2 text-left">
              <div class="flex items-center justify-start">
                <h1 class="text-white text-4xl font-medium">Find an auction</h1>
                <img src="~/assets/images/search.svg" alt="" />
              </div>
              <p class="text-white opacity-50">
                Every 12 hours a new auction starts that lasts exactly 12 hours.
                In these 12 hours we sell the slots that will become available
                for plotting at the end of those 12 hours. We never oversell so
                the plots will be generated with 24 hours after the starting
                time. If the most recent auction sells out you can buy slots on
                the next one. Every auction might be priced a bit different
                depending on market conditions and available hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center mt-32">
        <div class="mx-auto w-3/4">
          <h3 class="text-white opacity-50">our services</h3>
          <h1 class="text-white text-6xl">
            Why people choose us?
          </h1>
          <div class="w-1/2 bg-green mx-auto" style="height: 6px;"></div>
          <div class="mt-16 flex items-center justify-between">
            <div
              class="text-white text-center w-1/3 flex flex-col items-center mx-3"
            >
              <img src="~/assets/images/security.svg" alt="" />
              <h3 class="text-3xl capitalize my-8">Safety</h3>
              <h6 class="opacity-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                error maiores omnis explicabo officia facilis.
              </h6>
            </div>
            <div
              class="text-white text-center w-1/3 flex flex-col items-center mx-3"
            >
              <img src="~/assets/images/discount.svg" alt="" />
              <h3 class="text-3xl capitalize my-8">fair prices</h3>
              <h6 class="opacity-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                error maiores omnis explicabo officia facilis.
              </h6>
            </div>
            <div
              class="text-white text-center w-1/3 flex flex-col items-center mx-3"
            >
              <img src="~/assets/images/location2.svg" alt="" />
              <h3 class="text-3xl capitalize my-8">locations</h3>
              <h6 class="opacity-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                error maiores omnis explicabo officia facilis.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
