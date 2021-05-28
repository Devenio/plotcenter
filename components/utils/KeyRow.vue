<template>
  <tr class="text-center border-b-2 border-white border-opacity-25">
    <td class="py-6">
      <input
        type="radio"
        class="transform -translate-x-6 cursor-pointer scale-150"
        v-if="select_option"
        name="key_select"
        @change="selectedKey(data.id)"
      />
      #{{ data.id }}
    </td>
    <td>
      {{ data.farmer_pk }}
    </td>
    <td>{{ data.pool_pk }}</td>
    <td v-if="!isPurchase">
      <div
        class="px-2 py-1 inline rounded-xl cursor-pointer"
        style="background-color: #ff4d5460"
        @click="deleteKey(data.id)"
      >
        <fa :icon="['fas', 'trash-alt']" style="background-color: #ff4d54"></fa>
      </div>
    </td>
  </tr>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  props: {
    data: {
      type: Object,
      require: true
    },
    select_option: {
      type: Boolean,
      default: false
    },
    isPurchase: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    deleteKey(id) {
      const token = this.$store.getters.token;
      this.$swal({
        title: `remove key #${id}`,
        text: `are you sure you want delete key #${id} ?`,
        icon: "info",
        confirmButtonText: "Yes, delete it",
        showCancelButton: true
      }).then(res => {
        if (res.isConfirmed) {
          EventService.deleteKey(token, id)
            .then(res => {
              this.$swal({
                title: `key #${id} removed successfully!`,
                icon: "success",
                showCloseButton: true
              });
              this.$store.dispatch("panel/setKeys", token);
            })
            .catch(err => {
              this.$swal({
                title: `Error!`,
                text: "sorry, something went wrong. Please try again",
                icon: "error",
                showCloseButton: true
              });
              console.log(err);
            });
        }
      });
    },
    selectedKey(id) {
      this.$store.commit("panel/UPDATE_ORDER_WALLET",id)
    }
  }
};
</script>

<style lang="scss" scoped></style>
