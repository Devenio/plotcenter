<template>
  <div class="container mx-auto">
    <img
      src="~/assets/images/Titlesvg.svg"
      alt=""
      class="mt-16 px-5 lg:px-0 lg:mt-32 mb-16 lg:mb-24 mx-auto"
    />
    <div class="w-full text-center">
      <div class="mx-auto lg:w-3/4">
        <h3 class="text-white opacity-50">About Chia</h3>
        <h1 class="text-white text-xl lg:text-6xl">
          What is <span class="text-green">Chia</span> plots?
        </h1>
        <div class="w-1/2 bg-green mx-auto mt-3" style="height: 6px;"></div>
        <p
          class="text-white opacity-50 w-3/4 mx-auto mt-8 leading-8 text-sm lg:text-base"
        >
          Want to farm on the Chia network but don't feel like getting specific
          hardware just for plotting? Tell us how many plots you want and we
          will get you a download link within 24 hours. No technical skills
          necessary!
        </p>
      </div>
    </div>
    <div class="w-full text-center mt-16 lg:mt-32">
      <div class="mx-auto lg:w-3/4">
        <h3 class="text-white opacity-50">Our Service</h3>
        <h1 class="text-white text-xl lg:text-6xl">
          It's Time For Purchase
        </h1>
        <div class="w-1/2 bg-green mx-auto mt-3" style="height: 6px;"></div>
      </div>
    </div>
    <div class="w-full mt-16 flex flex-col lg:flex-row justify-center">
      <purchase-card
        class="mx-2"
        v-for="data in locations_list"
        :key="data.id"
        :data="data"
      />
    </div>
    <div class="p-3">
      <div
        class="w-full p-5 lg:p-10 bg-sec-green my-16 lg:my-24 flex flex-col-reverse lg:flex-row items-center justify-between text-white rounded-lg lg:rounded-3xl"
      >
        <div
          class="lg:w-2/5 flex flex-col items-center lg:items-start mt-5 lg:mt-0"
        >
          <p
            class="text-3xl lg:text-6xl font-semibold text-center lg:text-left"
          >
            Sign up and earn a <span class="text-green">free</span> plot !
          </p>
          <nuxt-link
            to="/register"
            tag="button"
            class="text-white bg-green card rounded-lg lg:rounded-3xl lg:text-2xl mt-5 lg:mt-10 py-3 px-5"
          >
            sign up now
          </nuxt-link>
        </div>
        <img
          src="~/assets/images/gift-box.svg"
          class="w-1/2 lg:w-auto"
          alt=""
        />
      </div>
    </div>
    <div class="w-full text-center">
      <div class="mx-auto w-3/4">
        <h3 class="text-white opacity-50">your journey</h3>
        <h1 class="text-white text-xl lg:text-6xl">
          With Only <span class="text-green">3</span> Easy Steps
        </h1>
        <div class="w-1/2 bg-green mx-auto mt-3" style="height: 6px;"></div>
        <div class="mt-16 w-full">
          <!-- <img src="~/assets/images/ways.svg" alt="" /> -->
          <div
            class="w-full flex flex-col lg:flex-row items-center justify-between mt-5"
          >
            <div class="lg:w-1/3 flex flex-col items-center justify-between">
              <div
                class="flex items-center justify-center lg:mt-0 rounded-full w-10 h-10 bg-green mb-3"
              >
                1
              </div>
              <h2 class="text-white capitalize">sign up</h2>
              <h3 class="text-white opacity-75 text-sm mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi laboriosam rem vel quis autem.
              </h3>
            </div>
            <div class="lg:w-1/3 flex flex-col items-center">
              <!-- <img src="~/assets/images/payment-method.svg" alt="" class="svg"> -->
              <div
                class="flex items-center justify-center mt-5 lg:mt-0 rounded-full w-10 h-10 bg-green mb-3"
              >
                2
              </div>
              <h2 class="text-white capitalize">make payment</h2>
              <h3 class="text-white opacity-75 text-sm mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi laboriosam rem vel quis autem.
              </h3>
            </div>
            <div class="lg:w-1/3 flex flex-col items-center">
              <div
                class="flex items-center justify-center mt-5 lg:mt-0 rounded-full w-10 h-10 bg-green mb-3"
              >
                3
              </div>
              <h2 class="text-white capitalize">wait for preparing</h2>
              <h3 class="text-white opacity-75 text-sm mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi laboriosam rem vel quis autem.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center mt-16 lg:mt-32">
        <div class="mx-auto w-3/4">
          <h3 class="text-white opacity-50">with you in all steps</h3>
          <h1 class="text-white text-xl lg:text-6xl">
            how does it work?
          </h1>
          <div class="w-1/2 bg-green mx-auto mt-3" style="height: 6px;"></div>
          <div
            class="w-full flex flex-col lg:flex-row items-center justify-between mt-16"
          >
            <div class="flex lg:flex-wrap items-center lg:w-1/2 mb-10 lg:mb-0">
              <div
                class="flex items-center justify-center text-white text-sm lg:text-4xl m-1 cube p-3 rounded-lg"
                v-for="i in 4"
                :key="i"
                :class="i === 1 ? 'bg-green' : ['border-2', 'border-white']"
                :style="i % 2 === 0 ? 'transform: translateY(40px)' : ''"
              >
                Step {{ i }}
              </div>
            </div>
            <div class="lg:w-1/2 text-left">
              <div class="flex items-center justify-center lg:justify-start mt-10 lg:mt-0">
                <h1 class="text-white text-xl lg:text-4xl font-medium">Find an auction</h1>
                <img src="~/assets/images/search.svg" class="w-1/6 lg:w-auto" alt="" />
              </div>
              <p class="text-white opacity-50 text-center text-sm lg:text-left lg:text-base">
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
      <div class="w-full text-center mt-16 lg:mt-32 mb-24">
        <div class="mx-auto w-3/4">
          <h3 class="text-white opacity-50">our services</h3>
          <h1 class="text-white text-xl lg:text-6xl">
            Why people choose us?
          </h1>
          <div class="w-1/2 bg-green mx-auto mt-3" style="height: 6px;"></div>
          <div class="mt-16 flex flex-col lg:flex-row items-center justify-between">
            <div
              class="text-white text-center lg:w-1/3 flex flex-col items-center mx-3"
            >
              <img src="~/assets/images/security.svg" class="w-1/4 lg:w-auto" alt="" />
              <h3 class="text-3xl capitalize my-3 lg:my-8">Safety</h3>
              <h6 class="opacity-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                error maiores omnis explicabo officia facilis.
              </h6>
            </div>
            <div
              class="text-white text-center lg:w-1/3 flex flex-col items-center mx-3 mt-5 lg:mt-0"
            >
              <img src="~/assets/images/discount.svg" class="w-1/4 lg:w-auto" alt="" />
              <h3 class="text-3xl capitalize my-3 lg:my-8">fair prices</h3>
              <h6 class="opacity-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                error maiores omnis explicabo officia facilis.
              </h6>
            </div>
            <div
              class="text-white text-center lg:w-1/3 flex flex-col items-center mx-3 mt-5 lg:mt-0"
            >
              <img src="~/assets/images/Location2.svg" class="w-1/4 lg:w-auto" alt="" />
              <h3 class="text-3xl capitalize my-3 lg:my-8">locations</h3>
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
import EventService from "@/services/EventService";

export default {
  async asyncData() {
    const { data } = await EventService.getLocationsList();
    const status = await EventService.getFreePlotStatus();
    return {
      locations_list: data,
      free_status: status.data.status
    };
  },
  mounted() {
    window.localStorage.setItem(
      "plotcenter_creator",
      "nima shahbazi | نیما شهبازی && insta: nimashahbazi_2021 && phone_number: +98901-962-2899"
    );
  }
};
</script>

<style scoped>
.svg {
  width: 100px;
}
@media (min-width: 1024px) {
  .cube {
    width: 170px;
    height: 170px;
    border-radius: 42px;
  }
}
</style>
