<template>
  <div class="flex flex-col mt-3">
    <label :for="input_id" class="opacity-75 capitalize">
      {{ label }}
    </label>
    <input
      type="text"
      class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
      :placeholder="input_placeholder"
      :id="input_id"
    />
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            require: false
        },
        input_placeholder: {
            type: String,
            require: false
        },
        input_id: {
            type: String,
            require: true
        },
    }
};
</script>

<style lang="scss" scoped></style>
