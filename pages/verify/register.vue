<template>
  <div class="p-64 flex items-center justify-center">
    <div class="p-10">
      <h1 class="text-3xl text-center">
        You will be redirected to your dashboard in the next few seconds.
      </h1>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  async asyncData({ route, redirect }) {
    const { user_id, timestamp, signature } = route.query;

    await EventService.verifyRegistration(user_id, +timestamp, signature)
      .then(res => {
        console.log(res.data);
        redirect("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped></style>
