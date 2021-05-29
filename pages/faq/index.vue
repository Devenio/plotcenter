<template>
  <div class="container mx-auto pb-24">
    <img src="~/assets/images/group18.svg" alt="" class="mx-auto mt-16" />
    <h1 class="text-white text-6xl text-center font-medium mt-10">
      Frequently Asked <span class="text-green">Questions</span>
    </h1>
    <h3 class="text-white opacity-50 text-center mb-24">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </h3>
    <div class="border-b-2 border-white border-opacity-25" v-for="i in 5" :key="i">
      <button
        class="accordion w-full py-10 flex items-center justify-between px-10"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </div>
        <div class="text-4xl text-green font-bold">+</div>
      </button>
      <div class="panel px-16 opacity-50 py-5 items-start hidden">
        <fa
          :icon="['fas', 'chevron-circle-right']"
          class="text-green mr-3"
        ></fa>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scoped></style>
