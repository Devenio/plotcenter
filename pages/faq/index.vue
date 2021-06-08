<template>
  <div class="container mx-auto pb-24">
    <img src="~/assets/images/group18.svg" alt="" class="mx-auto mt-16 px-5" />
    <h1 class="text-white text-xl lg:text-6xl text-center font-medium mt-10">
      Frequently Asked <span class="text-green">Questions</span>
    </h1>
    <h3 class="text-white opacity-50 text-center mb-10 lg:mb-24 text-sm lg:text-base mt-3 px-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </h3>
    <div
      class="border-b-2 border-white border-opacity-25"
      v-for="(item, index) in faq_list"
      :key="index"
    >
      <button
        class="accordion w-full py-5 lg:py-10 flex items-center justify-between px-3 lg:px-10"
      >
        <div class="text-left text-sm lg:text-base">
          {{ item.question }}
        </div>
        <div class="text-4xl text-green font-bold ml-3">+</div>
      </button>
      <div class="panel text-xs lg:text-base px-3 lg:px-16 opacity-50 py-5 items-start hidden">
        <fa
          :icon="['fas', 'chevron-circle-right']"
          class="text-green mr-3"
        ></fa>
        <p>
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  mounted() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.classList.contains("hidden")) {
          panel.classList.replace("hidden", "flex");
        } else {
          panel.classList.replace("flex", "hidden");
        }
      });
    }
  },
  async asyncData({}) {
    try {
      const { data } = await EventService.getFaq();
      return {
        faq_list: data
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss" scoped></style>
