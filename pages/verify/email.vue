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
    const { user_id, timestamp, signature, email } = route.query;
    email = decodeURIComponent(email);
    await EventService.verifyEmail(user_id, +timestamp, signature, email)
      .then(res => {
        this.$swal.fire({
          title: "email vrified successfully!",
          text: "you will be redirect to dashboard in next 2 seconds.",
          icon: "success",
          confirmButtonText: "ok",
          showCloseButton: true
        });
        setTimeout(() => {
          redirect("/dashboard");
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped></style>
