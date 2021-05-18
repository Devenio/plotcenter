<template>
  <div class="w-full p-10">
    <panel-title
      title="welcome to dashboard"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      pageName="dashboard"
    />
    <div class="w-full flex items-center justify-between text-white mt-16">
      <div class="mx-2 w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Total plots generated</h2>
        <h3 class="text-4xl font-medium">0</h3>
      </div>
      <div class="mx-2 w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Total GB</h2>
        <h3 class="text-4xl font-medium">0</h3>
      </div>
      <div class="mx-2 w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Ready for download</h2>
        <h3 class="text-4xl font-medium">0</h3>
      </div>
      <div class="mx-2 w-1/4 bg-th-dark text-center rounded-3xl p-5">
        <h2 class="text-sm">Average cost / plot</h2>
        <h3 class="text-4xl font-medium">0</h3>
      </div>
    </div>
    <div class="w-full flex items-center justify-between text-white mt-16">
      <div class="mx-2 w-1/2 bg-th-dark rounded-3xl p-5" style="height: 400px">
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
        class="mx-2 w-1/2 bg-th-dark text-center rounded-3xl p-5 flex items-center justify-between"
        style="height: 400px"
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
        <img src="~/assets/images/group11.svg" class="w-1/2 ml-5" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
export default {
  layout: "panel",
  components: {
    PanelTitle
  }
};
</script>
