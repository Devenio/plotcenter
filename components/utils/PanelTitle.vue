<template>
  <div class="flex items-center justify-between">
    <div class="text-white">
      <h2 class="capitalize text-lg">{{ title }}</h2>
      <h6 class="opacity-50">
        {{ subTitle }}
      </h6>
    </div>
    <div class="capitalize text-3xl font-medium text-green">
      {{ pageName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    subTitle: {
      type: String,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
