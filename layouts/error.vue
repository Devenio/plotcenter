<template>
  <div>
    Error Page
  </div>
</template>

<script>
export default {
  props: ["error"],
  beforeMount() {
    if (this.error.statusCode == 404) {
      this.$router.push("/404");
    }
  }
};
</script>

<style lang="scss" scoped></style>
