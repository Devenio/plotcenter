<template>
  <div class="container mx-auto pb-24">
    <img src="~/assets/images/group24.svg" alt="" class="mx-auto mt-16" />
    <h1 class="text-white text-6xl text-center font-medium mt-10">
      Check New <span class="text-green">Notifications</span>
    </h1>
    <h3 class="text-white opacity-50 text-center mb-24">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </h3>
    <div
      class="border-b-2 border-white border-opacity-25"
      v-for="(item, index) in notif_list"
      :key="index"
    >
      <button
        class="accordion w-full py-10 flex items-center justify-between px-10"
      >
        <div>
          {{ item.title }}
        </div>
        <div class="text-4xl text-green font-bold">+</div>
      </button>
      <div class="panel px-16 opacity-50 py-5 items-start hidden">
        <fa
          :icon="['fas', 'chevron-circle-right']"
          class="text-green mr-3"
        ></fa>
        <p>
          {{ item.text }}
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
      const { data } = await EventService.get_notification_list();
      return {
        notif_list: data
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss" scoped></style>
