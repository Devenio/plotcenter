<template>
  <div class="w-full p-10">
    <panel-title
      :title="`PLOTS FOR ORDER #${$route.query.id}`"
      subTitle="See a summery of your orders and details"
      pageName="orders"
    />
    <div class="flex items-center justify-around text-white mt-10">
      <div
        class="p-5 flex items-center bg-th-dark rounded-3xl"
        style="height: 200px;"
      >
        <div class="flex flex-col items-center mr-5 text-2xl">
          <h1 class="">total price</h1>
          €{{ $route.query.amount }}
        </div>
        <img src="~/assets/images/group20.svg" alt="" style="width: 150px;" />
      </div>
      <div
        class="p-5 flex items-center bg-th-dark rounded-3xl"
        style="height: 200px;"
      >
        <div class="flex flex-col items-center mr-5 text-2xl">
          <h1 class="">plots completed</h1>
          {{ $route.query.co }}/{{ $route.query.count }}
        </div>
        <img src="~/assets/images/group19.svg" alt="" style="width: 150px;" />
      </div>
    </div>
    <table class="mt-10 w-full overflow-hidden text-sm text-white">
      <tr class="capitalize bg-th-dark py-10">
        <th class="py-5 px-2 text-xs rounded-l-3xl">number</th>
        <th class="py-5 px-2 text-xs">status</th>
        <th class="py-5 px-2 text-xs">progress</th>
        <th class="py-5 px-2 text-xs">plots phase</th>
        <th class="py-5 px-2 text-xs rounded-r-3xl">actions</th>
      </tr>
      <tr
        class="text-center border-b-2 border-white border-opacity-25"
        v-for="(plot, index) in plots"
        :key="index"
      >
        <td class="py-6">plot #{{ plot.checksum }}</td>
        <td class="py-6">{{ plot.status }}</td>
        <td class="py-6" v-if="progress_phase[index]">{{ progress_phase[index].progress }}%</td>
        <td class="py-6" v-if="progress_phase[index]">{{ progress_phase[index].phase }}</td>
        <td class="py-6">
            <a :href="plot.download_link" download class="p-2 bg-green rounded-xl">download</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import EventService from "@/services/EventService";
export default {
  data() {
    return { progress_phase: [] };
  },
  layout: "panel",
  components: {
    PanelTitle
  },
  async asyncData({ query, store }) {
    try {
      const token = store.state.token;
      let plots = [];
      const { data } = await EventService.getOrderPlots(token, query.id);
      plots = data;
      return { plots };
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {
    const token = this.$store.state.token;
    this.plots.forEach(plot => {
      this.$axios
        .get(plot.progress_phase, {
          headers: { Authorization: `token ${token}` }
        })
        .then(res => {
          this.progress_phase.push(res.data);
        });
    });
  }
};
</script>

<style lang="scss" scoped></style>
