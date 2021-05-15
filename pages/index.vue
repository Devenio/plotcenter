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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
