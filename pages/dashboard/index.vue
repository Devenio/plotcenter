<template>
  <div class="w-full py-5 px-3 lg:p-10">
    <panel-title
      title="welcome to dashboard"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      pageName="dashboard"
    />
    <div class="w-full flex flex-wrap lg:flex-no-wrap items-center justify-between text-white mt-5 lg:mt-16">
      <div class="mx-1 flex-grow mt-2 lg:w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Total plots generated</h2>
        <h3 class="text-4xl font-medium">{{ dashboard.total ? dashboard.total : 0}}</h3>
      </div>
      <div class="mx-1 flex-grow mt-2 lg:w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Total GB</h2>
        <h3 class="text-4xl font-medium">{{ dashboard.size ? dashboard.size : 0}}</h3>
      </div>
      <div class="mx-1 flex-grow mt-2 lg:w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Ready for download</h2>
        <h3 class="text-4xl font-medium">{{ dashboard.ready ? dashboard.ready : 0}}</h3>
      </div>
      <div class="mx-1 flex-grow mt-2 lg:w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Average cost / plot</h2>
        <h3 class="text-4xl font-medium">{{ dashboard.average_cost ? dashboard.average_cost : 0 }}</h3>
      </div>
    </div>
    <div class="w-full flex flex-col lg:flex-row items-center justify-between text-white mt-16">
      <div class="mx-2 lg:w-1/2 bg-th-dark rounded-3xl p-5" style="height: 400px">
        <div>pending unpaid orders</div>
        <div>
          <img
            src="~/assets/images/group10.svg"
            class="w-64 mt-10 mx-auto"
            alt=""
          />
          <h1 class="capitalize text-2xl font-medium text-center">
            There is no record yet
          </h1>
        </div>
      </div>
      <div
        class="mx-2 mt-2 lg:mt-0 lg:w-1/2 bg-th-dark text-center rounded-3xl p-5 flex flex-col-reverse lg:flex-row items-center justify-between"
      >
        <div class="text-left">
          <h1 class="capitalize text-2xl font-medium">
            didn't get your free plot yet?
          </h1>
          <small class="opacity-50">get it right now</small>
          <button class="py-2 px-5 bg-green capitalize rounded-xl mt-5">
            get free plot
          </button>
        </div>
        <img src="~/assets/images/group11.svg" class="lg:w-1/2 lg:ml-5" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import EventService from "@/services/EventService";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      dashboard: {}
    };
  },
  layout: "panel",
  components: {
    PanelTitle
  },
  middleware: "Auth",
  fetch() {
    const token = this.$store.getters.token;
    this.$store.dispatch("panel/set_orders_list", token);
    this.$store.dispatch("panel/setProfile", token);
    this.$store.dispatch("panel/setDash", token);
    this.$store.dispatch("panel/setKeys", token);
  },
  computed: {
    ...mapGetters(["token"])
  },
  beforeMount() {
    this.dashboard = this.$store.state.panel.dashboard;
  },
};
</script>
