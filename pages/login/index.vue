<template>
  <div class="container mx-auto mt-24 flex">
    <div class="w-1/2 mr-10">
      <div class="w-full bg-sec-dark py-5 px-10" style="border-radius: 75px;">
        <h2 class="text-white text-3xl font-medium">Sign in</h2>
        <span class="text-white opacity-50 text-sm">
          to access to your account
        </span>
        <br />
        <span class="text-white opacity-50 text-sm">
          Dont have an account yet?
        </span>
        <nuxt-link to="/register" style="color: #1c6eb7">Sign up</nuxt-link>
        <form class="mt-10" @submit.prevent="checkFormData()">
          <div class="flex flex-col mt-3">
            <label for="username" class="opacity-75 capitalize">
              username or email
            </label>
            <input
              type="text"
              class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
              placeholder="enter your username or email"
              id="username"
              v-model="login"
            />
          </div>
          <div class="flex flex-col mt-3">
            <label for="password" class="opacity-75 capitalize">
              password
            </label>
            <input
              type="password"
              class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
              placeholder="enter your password"
              id="password"
              v-model="password"
            />
          </div>
          <a
            style="color: #1c6eb7"
            class="cursor-pointer"
            @click="sendResetPassLink()"
            >Forgot your password?</a
          >

          <button
            type="submit"
            class="w-full py-3 font-medium text-2xl bg-green my-5 rounded-2xl"
            style="outline: none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    <div
      class="w-1/2 text-center relative flex flex-col items-center justify-center"
    >
      <h1 class="text-5xl text-white relative z-10">
        Enter to the world of <span class="text-green">chia</span> currency
      </h1>
      <img
        src="~/assets/images/login2.svg"
        alt=""
        class="transform -translate-y-24 relative z-0"
      />
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    checkFormData() {
      if (!this.login || !this.password) {
        this.$swal.fire({
          title: "Error!",
          text: "username and password are required.",
          icon: "error",
          confirmButtonText: "ok",
          showCloseButton: true
        });
      } else {
        this.loginUser();
      }
    },
    loginUser() {
      EventService.login(this.login, this.password)
        .then(res => {
          this.$store.dispatch("setToken", res.data.token);
          document.cookie = `token=${res.data.token};`;
          this.$swal.fire({
            title: "login successfully!",
            icon: "success",
            confirmButtonText: "ok",
            showCloseButton: true
          });
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
          if (err.message.includes("400")) {
            this.$swal.fire({
              title: "Error!",
              text: "invalid username/email or password.",
              icon: "error",
              confirmButtonText: "ok",
              showCloseButton: true
            });
          }
        });
    },
    async sendResetPassLink() {
      const { value: email } = await this.$swal.fire({
        title: "type your email to send reset password link",
        input: "email",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "send link",
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !this.$swal.isLoading()
      });

      if (email) {
        EventService.send_rest_password_link(email)
          .then(res => {
            this.$swal.fire({
              title: "success!",
              text: res.data.detail + " to " + email,
              icon: "success",
              confirmButtonText: "ok",
              showCloseButton: true
            });
          })
          .catch(err => {
            console.log(err);
            this.$swal.fire({
              title: "Error!",
              text: "an error occurred.",
              icon: "error",
              confirmButtonText: "ok",
              showCloseButton: true
            });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
