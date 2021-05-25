<template>
  <div class="w-full p-10">
    <panel-title
      title="profile information"
      subTitle="here you can see your profile detail"
      pageName="profile"
    />
    <ul class="w-full mt-16 flex flex-wrap text-white">
      <li class="w-1/2 my-1">
        <span class="text-lg">first name:</span>
        <span class="opacity-75">{{ profile.first_name }}</span>
      </li>
      <li class="w-1/2 my-1">
        <span class="text-lg">last name:</span>
        <span class="opacity-75">{{ profile.last_name }}</span>
      </li>
      <li class="w-1/2 my-1">
        <span class="text-lg">Email:</span>
        <input
          type="text"
          class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-64 text-sm"
          placeholder="enter your email"
          v-model="email"
        />
        <br />
        <button
          class="py-2 px-5 bg-sec-green rounded-3xl"
          @click="registerEmail()"
        >
          change email
        </button>
      </li>
      <li class="w-1/2 my-1">
        <span class="text-lg">username:</span>
        <span class="opacity-75">{{ profile.username }}</span>
      </li>
      <li class="w-1/2 mt-10 cursor-pointer text-lg" style="color: #1c6eb7">
        change password
      </li>
    </ul>
    <form class="text-white" @submit.prevent="checkForm()">
      <div class="w-full flex flex-wrap items-center justify-between">
        <div class="flex flex-col mt-3 w-full">
          <label for="old-password" class="opacity-75 capitalize">
            old password
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
            placeholder="enter your old-password"
            id="old-password"
            v-model="old_password"
          />
        </div>
        <div class="flex flex-col mt-3 w-full">
          <label for="password" class="opacity-75 capitalize">
            password
          </label>
          <input
            type="password"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none password-white w-full text-sm"
            placeholder="enter your password"
            id="password"
            v-model="password"
          />
        </div>
        <div class="flex flex-col mt-3 w-full">
          <label for="pass-confirm" class="opacity-75 capitalize">
            password confirm
          </label>
          <input
            type="password"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
            placeholder="enter your password confirm"
            id="pass-confirm"
            v-model="password_confirm"
          />
        </div>
      </div>
      <button
        type="submit"
        style="outline: none"
        class="w-full py-3 font-medium text-2xl bg-green my-5 rounded-2xl"
      >
        Change Password
      </button>
    </form>
  </div>
</template>

<script>
import PanelTitle from "@/components/utils/PanelTitle";
import EventService from "@/services/EventService";
export default {
  data() {
    return {
      profile: {},
      password: "",
      old_password: "",
      password_confirm: "",
      email: "",
      origEmail: ""
    };
  },
  middleware: "Auth",
  layout: "panel",
  components: {
    PanelTitle
  },
  mounted() {
    this.profile = this.$store.state.panel.profile;
    this.email = this.$store.state.panel.profile.email;
    this.origEmail = this.$store.state.panel.profile.email;
  },
  methods: {
    changePass() {
      EventService.changePass(
        this.$store.getters.token,
        this.old_password,
        this.password,
        this.password_confirm
      )
        .then(res => {
          this.$swal.fire({
            title: "success",
            text: res.data.detail,
            icon: "success",
            confirmButtonText: "ok",
            showCloseButton: true
          });
          this.old_password = this.password = this.password_confirm = "";
        })
        .catch(err => {
          console.log(err);
          this.$swal.fire({
            title: "Error!",
            text: "Old password is not correct.",
            icon: "error",
            confirmButtonText: "ok",
            showCloseButton: true
          });
        });
    },
    checkForm() {
      if (
        this.password.length < 8 ||
        this.old_password.length < 8 ||
        this.password_confirm.length < 8
      ) {
        this.$swal.fire({
          title: "Error!",
          text: "passwords should contain at least 8 characters",
          icon: "error",
          confirmButtonText: "ok",
          showCloseButton: true
        });
      } else if (
        !this.password.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        )
      ) {
        this.$swal.fire({
          title: "Error!",
          text:
            "Password should contains number, uppercase and lowercase letter and special letters like @#$%....",
          icon: "error",
          confirmButtonText: "ok",
          showCloseButton: true
        });
      } else if (this.password_confirm != this.password) {
        this.$swal.fire({
          title: "Error!",
          text: "Password and confirm password should be same.",
          icon: "error",
          confirmButtonText: "ok",
          showCloseButton: true
        });
      } else {
        this.passErr = "";
        this.changePass();
      }
    },
    registerEmail() {
      console.log("clicked");
      const email = this.profile.email;
      if (this.email === this.origEmail) {
        this.$swal.fire({
          title: "Error!",
          text: "this email has been verified before.",
          icon: "error",
          confirmButtonText: "ok",
          showCloseButton: true
        });
      } else {
        EventService.registerEmail(this.$store.getters.token, email)
          .then(res => {
            console.log(res);
            console.log(email);
            this.$swal.fire({
              title: "success",
              text:
                res.data.detail,
              icon: "success",
              confirmButtonText: "ok",
              showCloseButton: true
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped></style>
