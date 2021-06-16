<template>
  <div class="w-full p-5 lg:p-10">
    <panel-title
      title="manage your Keys"
      subTitle="Add , Delete and manage your kyes"
      pageName="keys"
    />
    <table
      class="mt-10 w-full overflow-hidden text-sm text-white hidden lg:table"
    >
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">name</th>
        <th class="py-5 px-2 text-xs">farmeer id</th>
        <th class="py-5 px-2 text-xs">pool id</th>
        <th class="py-5 px-2 text-xs rounded-r-3xl">actions</th>
      </tr>
      <key-row v-for="key in keys" :key="key.id" :data="key" />
    </table>

    <div
      v-for="key in keys"
      :key="key.id"
      class="w-full rounded-lg my-3 p-3 text-white px-5 bg-dark lg:hidden"
    >
      <div class="flex justify-between items-center">
        <div class="text-center text-sm">
          key name:
          <br />
          #{{ key.id }}
        </div>
        <div
          class="w-10 h-10 rounded-full bg-sec-green flex items-center justify-center text-green"
          @click="openUM = key.id"
        >
          <fa :icon="['fas', 'angle-down']" />
        </div>
      </div>
      <div
        class="mx-3 mt-5 text-sm divide-y-2 divide-opacity-25 divide-white"
        v-if="openUM == key.id"
      >
        <div class="flex items-center py-5 justify-between">
          farmer id
          <span>{{ key.farmer_pk }}</span>
        </div>
        <div class="flex items-center py-5 justify-between">
          pool id
          <span>{{ key.pool_pk }}</span>
        </div>
        <div class="flex items-center py-5 justify-between">
          actions
          <div
            class="px-2 py-1 inline rounded-xl cursor-pointer"
            style="background-color: #ff4d5460"
            @click="deleteKey(key.id)"
          >
            <fa
              :icon="['fas', 'trash-alt']"
              style="background-color: #ff4d54"
            ></fa>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import KeyRow from "@/components/utils/KeyRow";
export default {
  layout: "panel",
  middleware: "Auth",
  components: {
    PanelTitle,
    KeyRow
  },
  computed: {
    keys() {
      return this.$store.state.panel.keys;
    }
  },
  data() {
    return {
      openUM: NaN
    };
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
