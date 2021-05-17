<template>
  <nuxt-link
    tag="li"
    :to="{ path }"
    class="flex items-center my-3 py-1 px-5 capitalize mt-10 cursor-pointer text-white"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
