<template>
  <div class="w-full p-10">
    <!-- steps bar -->
    <div class="w-full flex items-start justify-around text-white">
      <div class="flex items-center flex-col w-40 text-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center bg-green mb-3"
          :class="step == 1 ? 'bg-green' : 'bg-th-dark'"
        >
          1
        </div>
        <span
          class="text-sm"
          :class="step == 1 ? 'text-green' : ['text-white', 'opacity-50']"
          >choose a key</span
        >
      </div>
      <div class="flex items-center flex-col w-40 text-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center mb-3"
          :class="step == 2 ? 'bg-green' : 'bg-th-dark'"
        >
          2
        </div>
        <span
          class="text-sm opacity-50"
          :class="step == 2 ? 'text-green' : ['text-white', 'opacity-50']"
          >make an order</span
        >
      </div>
      <div class="flex items-center flex-col w-40 text-center">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center mb-3"
          :class="step == 3 ? 'bg-green' : 'bg-th-dark'"
        >
          3
        </div>
        <span
          class="text-sm opacity-50"
          :class="step == 3 ? 'text-green' : ['text-white', 'opacity-50']"
          >click the receipt and pay</span
        >
      </div>
    </div>
    <!-- content -->
    <div
      class="text-center text-3xl text-white mt-10 flex items-center justify-between"
    >
      <button
        class="py-2 px-5 border-2 border-green text-lg text-white rounded-2xl justify-self-end"
        :class="step > 1 ? 'visible' : 'invisible'"
        @click="step--"
      >
        <fa :icon="['fas', 'angle-left']"></fa>
        Back
      </button>
      {{ titles[step - 1] }}
      <button
        class="py-2 px-5 border-2 border-green text-lg text-white rounded-2xl justify-self-end"
        @click="nextStep()"
        :class="step < 3 ? 'visible' : 'invisible'"
      >
        Next
        <fa :icon="['fas', 'angle-right']"></fa>
      </button>
    </div>
    <!-- step 1 -->
    <table
      class="mt-10 w-full overflow-hidden text-sm text-white"
      v-if="step == 1"
    >
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">name</th>
        <th class="py-5 px-2 text-xs">farm key</th>
        <th class="py-5 px-2 text-xs w-1/3 rounded-r-3xl">pool key</th>
      </tr>
      <key-row
        v-for="key in keys"
        :key="key.id"
        :data="key"
        :select_option="true"
        :isPurchase="true"
      />
    </table>

    <!-- step 2 -->
    <table class="mt-10 w-full overflow-hidden text-white" v-if="step == 2">
      <tr class="capitalize bg-th-dark py-10">
        <th
          class="py-5 px-2 font-normal"
          v-for="location in locations_list"
          :key="location.id"
        >
          <input
            type="radio"
            class="transform -translate-x-3 cursor-pointer scale-150"
            name="loc_select"
            v-if="location.order_capacity"
            @change="
              setLoc(
                location.id,
                location.order_capacity,
                location.retention_time,
                location.price
              )
            "
          />
          <input
            type="radio"
            class="transform -translate-x-3 cursor-pointer scale-150"
            name="loc_select"
            v-if="!location.order_capacity"
            disabled
          />
          {{ location.name }}
        </th>
      </tr>
      <tr>
        <td
          class="py-5 px-5 text-center rounded-xl"
          v-for="location in locations_list"
          :key="location.id + 'a'"
        >
          <div
            class="py-2 px-3"
            :class="
              location.order_capacity
                ? ['bg-sec-green', 'text-green']
                : ['bg-th-red']
            "
          >
            {{
              location.order_capacity
                ? location.order_capacity + " plots"
                : "sold out"
            }}
          </div>
        </td>
      </tr>
    </table>

    <div
      v-if="step == 2"
      class="w-full flex items-center justify-around mt-16 text-white"
    >
      <div
        class="p-5 bg-dark rounded-3xl flex flex-col items-center select-none"
      >
        <h2 class="text-center text-2xl capitalize">enter number of plots</h2>
        <div
          class="flex mt-5 bg-th-dark text-xl text-center rounded-xl overflow-hidden border-2 border-white border-opacity-25"
        >
          <div
            class="p-3 px-1 flex cursor-pointer items-center justify-center border-2 border-white border-opacity-25"
            @click="plot_count == 1 ? '' : plot_count--"
          >
            <fa :icon="['fas', 'angle-left']"></fa>
          </div>
          <div class="py-3 text-2xl mx-5 select-none">{{ plot_count }}</div>
          <div
            class="p-3 px-1 flex cursor-pointer items-center justify-center border-2 border-white border-opacity-25"
            @click="plot_count < plots_capacity ? plot_count++ : ''"
          >
            <fa :icon="['fas', 'angle-right']"></fa>
          </div>
        </div>
        <h2 class="text-center text-2xl capitalize mt-5">
          of {{ plots_capacity }}
        </h2>
      </div>
      <div
        class="p-5 bg-dark rounded-3xl flex flex-col items-center select-none"
      >
        <h2 class="text-center text-2xl capitalize">enter retention day</h2>
        <div class="flex items-center mt-5">
          <h3 class="text-2xl mr-3">{{ retention_time }} +</h3>
          <div
            class="flex bg-th-dark text-xl text-center rounded-xl overflow-hidden border-2 border-white border-opacity-25"
          >
            <div
              class="p-3 px-1 flex cursor-pointer items-center justify-center border-2 border-white border-opacity-25"
              @click="extra_time == 0 ? '' : extra_time--"
            >
              <fa :icon="['fas', 'angle-left']"></fa>
            </div>
            <div class="py-3 text-2xl mx-5 select-none">{{ extra_time }}</div>
            <div
              class="p-3 px-1 flex cursor-pointer items-center justify-center border-2 border-white border-opacity-25"
              @click="extra_time++"
            >
              <fa :icon="['fas', 'angle-right']"></fa>
            </div>
          </div>
        </div>
        <div
          class="p-2 flex items-center mt-5 text-sm text-green bg-sec-green rounded-xl"
        >
          <fa :icon="['fas', 'circle']" class="mr-2"></fa>
          there is 1$ cost per each extra day
        </div>
      </div>
    </div>
    <!-- step 3 -->
    <table
      class="mt-10 w-full overflow-hidden text-sm text-white"
      v-if="step == 3"
    >
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">key name</th>
        <th class="py-5 px-2 text-xs">number of plots</th>
        <th class="py-5 px-2 text-xs">location</th>
        <th class="py-5 px-2 text-xs rounded-r-3xl">retention time</th>
      </tr>
      <tr class="text-center border-b-2 border-white border-opacity-25">
        <td class="py-5">#{{ $store.state.panel.order.wallet }}</td>
        <td>{{ $store.state.panel.order.numberOfPlots }}</td>
        <td>{{ $store.state.panel.order.location }}</td>
        <td>{{ retention_time }} + {{ extra_time }}</td>
      </tr>
    </table>

    <div
      v-if="step == 3"
      class="w-full p-10 text-white bg-th-dark rounded-3xl mt-10"
    >
      <div class="w-full flex items-start justify-between">
        <div class="flex items-center">
          <div>
            <h3 class="text-2xl capitalize">total price</h3>
            <h6 class="mt-5 text-green text-4xl text-center">
              {{ plot_count * location_price + extra_time * plot_count }}$
            </h6>
          </div>
          <span class="flex flex-col items-start leading-6 ml-10">
            <div>
              <strong class="text-green">{{ plot_count }}</strong> plots *
              {{ location_price }}$
            </div>
            <strong class="text-xl">+</strong>
            <div>
              <strong class="text-green">{{ extra_time }}</strong> extra
              retention days * 1$
            </div>
          </span>
        </div>
        <div>
          <h3 class="text-2xl">choose your plane</h3>
          <div
            class="p-2 flex items-center mt-5 text-sm text-green bg-sec-green rounded-xl"
            v-for="pgw in pgws_list"
            :key="pgw.id"
            v-show="pgw.discount"
          >
            <fa :icon="['fas', 'tags']" class="mr-2"></fa>
            {{ pgw.discount }}$ discount to pay with {{ pgw.name }}
          </div>
          <div
            class="mt-5 flex items-center"
            v-for="pgw in pgws_list"
            :key="pgw.id + 'b'"
          >
            <input
              type="radio"
              class="transform -translate-x-3 cursor-pointer scale-150"
              name="pgw_select"
              @change="setPlane(pgw.id)"
            />
            <img :src="pgw.logo" style="width: 30px;" class="mx-2" />
            {{ pgw.name }}
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-5">
        <button
          @click="createOrder()"
          class="py-3 px-5 rounded-xl"
          style="background-color: #00d97e"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import KeyRow from "@/components/utils/KeyRow";
import EventService from "@/services/EventService";
export default {
  data() {
    return {
      step: 1,
      titles: [
        "choose your key",
        "choose you location",
        "Check out your receipt"
      ],
      plot_count: 1,
      plots_capacity: 0,
      pgws_list: [],
      extra_time: 0,
      retention_time: 0,
      location_price: 0,
      plane: ""
    };
  },
  layout: "panel",
  middleware: "Auth",
  components: {
    KeyRow
  },
  computed: {
    keys() {
      return this.$store.state.panel.keys;
    }
  },
  methods: {
    nextStep() {
      const order_wallet = this.$store.state.panel.order.wallet;
      const order_loc = this.$store.state.panel.order.location;
      if (this.step === 1) {
        if (!order_wallet) {
          this.$swal({
            title: "please select a key at first",
            icon: "info",
            showCloseButton: true
          });
        } else {
          this.step++;
        }
      } else if (this.step === 2) {
        if (!order_loc) {
          this.$swal({
            title: "please choose your location",
            icon: "info",
            showCloseButton: true
          });
        } else {
          this.$store.commit("panel/UPDATE_ORDER_PLOTS", this.plot_count);
          this.step++;
          EventService.pgws_list()
            .then(res => {
              this.pgws_list = res.data;
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },
    setLoc(id, capacity, retention, price) {
      this.$store.commit("panel/UPDATE_ORDER_LOC", id);
      this.plots_capacity = capacity;
      this.retention_time = retention;
      this.location_price = price;
    },
    setPlane(id) {
      this.plane = id;
    },
    createOrder() {
      const token = this.$store.state.token;
      const wallet = this.$store.state.panel.order.wallet;
      const location = this.$store.state.panel.order.location;
      if (!this.plane) {
        this.$swal({
          title: "Please choose your plane.",
          showCloseButton: true,
          icon: "info"
        });
      } else {
        EventService.createOrder(
          token,
          wallet,
          location,
          this.plot_count,
          this.extra_time
        )
          .then(res => {
            this.$store.dispatch("panel/set_orders_list", token);
            this.pay(token, res.data.id, this.plane);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    pay(token, order, pgw) {
      EventService.pay(token, order, pgw)
        .then(res => {
          console.log(res);
          window.open(res.data.redirect_url, "_blank");
        })
        .catch(err => {
          console.log(err);
          this.$swal({
            title: "Error!",
            text: "something went wrong.please try again later.",
            icon: "error",
            showCloseButton: true
          })
        });
    }
  },
  async asyncData() {
    const { data } = await EventService.getLocationsList();
    return {
      locations_list: data
    };
  },
  mounted() {
    console.log(this.locations_list);
    this.step = 1;
    this.$store.commit("panel/UPDATE_ORDER_LOC", "");
    this.$store.commit("panel/UPDATE_ORDER_WALLET", "");
  }
};
</script>

<style scoped>
.bg-th-red {
  background-color: #ff4d5460;
}
</style>
