<template>
  <div class="container mx-auto mt-10 lg:mt-24 mb-16 flex">
    <div class="lg:w-1/2 lg:mr-10">
      <div class="w-full bg-sec-dark py-5 px-5 lg:px-10 rounded-lg lg:rounded-3xl">
        <h2 class="text-white text-xl lg:text-3xl font-medium">Sign up</h2>
        <span class="text-white opacity-50 text-sm">
          and enter the world of chia currency
        </span>
        <br />
        <span class="text-white opacity-50 text-sm">
          Already have an acount?
        </span>
        <nuxt-link to="/login" style="color: #1c6eb7">Sign in</nuxt-link>
        <form class="mt-10" @submit.prevent="checkForm()">
          <div class="w-full flex flex-wrap items-center justify-between">
            <div class="flex flex-col mt-3">
              <label for="username" class="opacity-75 capitalize">
                username
              </label>
              <input
                type="text"
                class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
                placeholder="enter your username"
                id="username"
                v-model.lazy="userData.username"
              />
              <p v-if="usernameErr" class="text-xs text-red">
                {{ usernameErr }}
              </p>
            </div>
            <div class="flex flex-col mt-3">
              <label for="email" class="opacity-75 capitalize">
                email
              </label>
              <input
                type="text"
                class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
                placeholder="enter your email address"
                id="email"
                v-model="userData.email"
              />
              <p v-if="emailErr" class="text-xs text-red">
                {{ emailErr }}
              </p>
            </div>
            <div class="flex flex-col mt-3">
              <label for="password" class="opacity-75 capitalize">
                password
              </label>
              <input
                type="password"
                class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
                placeholder="enter your password"
                id="password"
                v-model="userData.password"
              />
              <p v-if="passErr" class="text-xs text-red">
                {{ passErr }}
              </p>
            </div>
            <div class="flex flex-col mt-3">
              <label for="confirm-password" class="opacity-75 capitalize">
                confirm-password
              </label>
              <input
                type="password"
                class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
                placeholder="confirm your password"
                id="confirm-password"
                v-model="userData.password_confirm"
              />
              <p v-if="conPassErr" class="text-xs text-red">
                {{ conPassErr }}
              </p>
            </div>
          </div>
          <h3 class="text-2xl mt-10 mb-5">
            Key information
            <small class="text-green text-base">(optional)</small>
          </h3>
          <label for="key-name" class="opacity-75 capitalize ml-3">
            key name
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
            placeholder="choose a name for you key"
            id="key-name"
          />
          <label for="farmer-id" class="opacity-75 capitalize ml-3">
            farmer id
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
            placeholder="enter your farmer id"
            id="farmer-id"
          />
          <label for="pool-id" class="opacity-75 capitalize ml-3">
            pool id
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
            placeholder="enter your Pool id"
            id="pool-id"
          />

          <button
            type="submit"
            style="outline: none"
            class="w-full py-3 font-medium lg:text-2xl bg-green my-5 rounded-2xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    <div
      class="w-1/2 text-center relative flex-col items-center justify-center hidden lg:flex"
    >
      <h1 class="text-5xl text-white relative z-10">
        Enter to the world of <span class="text-green">chia</span> currency
      </h1>
      <img
        src="~/assets/images/login.svg"
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
      usernameErr: "",
      emailErr: "",
      passErr: "",
      conPassErr: "",
      userData: {
        username: "",
        email: "",
        password: "",
        password_confirm: ""
      }
    };
  },
  mounted() {},
  methods: {
    register() {
      EventService.register(this.userData)
        .then(res => {
          if (res.data) {
            this.$swal
              .fire({
                title: "Registered successfully!",
                text: "please check your email to login to your account.",
                icon: "success",
                confirmButtonText: "open email",
                showCloseButton: true,
                showCancelButton: true,
                cancelButtonText: "close"
              })
              .then(result => {
                if (result.isConfirmed) {
                  window.open("https://gmail.com", "_blank");
                }
              });
          }
        })
        .catch(err => {
          if (err.message.includes("400")) {
            this.$swal.fire({
              title: "Error!",
              text: "username or email has been taken before.",
              icon: "error",
              confirmButtonText: "ok",
              showCloseButton: true
            });
          }
        });
    },
    checkForm() {
      const { username, email, password, password_confirm } = this.userData;
      !username
        ? (this.usernameErr = "username is required.")
        : (this.usernameErr = "");

      if (!email) {
        this.emailErr = "email is required.";
      } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        this.emailErr = "valid email is required.";
      } else {
        this.emailErr = "";
      }

      if (password.length < 8) {
        this.passErr = "Password of at least 8 characters.";
      } else if (
        !password.match(
          /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        )
      ) {
        this.passErr =
          "Password should contains number, uppercase and lowercase letter.";
      } else {
        this.passErr = "";
      }

      if (password != password_confirm) {
        this.conPassErr = "confirm passwrod not matched.";
      } else {
        this.conPassErr = "";
      }

      if (
        !this.usernameErr &&
        !this.emailErr &&
        !this.passErr &&
        !this.conPassErr
      ) {
        this.register();
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
