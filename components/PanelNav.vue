<template>
  <div class="container mx-auto flex items-center justify-between">
    <img
      src="~/assets/images/PlotCenter.png"
      alt="Logo"
      width="254px"
      class="cursor-pointer"
    />
    <div>
      <div
        class="flex items-center jsutify-center py-3 px-5 bg-sec-dark rounded-xl"
      >
        <img src="~/assets/icons/user.svg" class="mr-3" />
        <h3>Nima shahbazi</h3>
        <div
          :class="isOpen ? 'arrow-up' : 'arrow-down'"
          class="ml-3 cursor-pointer"
          @click="isOpen = !isOpen"
        ></div>
      </div>
      <div v-if="isOpen" class="absolute rounded-xl bg-sec-dark mt-3 p-5">
        <div
          class="flex items-center py-2 px-4 border-2 border-green rounded-xl cursor-pointer"
        >
          <img src="~/assets/icons/user2.svg" class="mr-3" />
          <h3 class="text-sm">edit profile</h3>
        </div>
        <div
          class="flex items-center py-2 px-4 border-2 border-green rounded-xl cursor-pointer mt-3"
        >
          <img src="~/assets/icons/Logout.svg" class="mr-3" />
          <h3 class="text-sm">exit</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path);
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
* {
  @apply text-white;
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #fff;
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #fff;
}
</style>
