<template>
  <div class="w-full p-10">
    <panel-title
      title="edit your profile"
      subTitle="You can change your personal information here"
      pageName="profile"
    />
    <ul
      class="w-full border-b-2 border-white border-opacity-50 mt-16 flex text-white justify-start"
    >
      <li
        class="py-3 px-2 mx-3 opacity-75 cursor-pointer"
        @click="part = 1"
        :class="part === 1 ? ['text-green', 'border-b-4', 'border-green'] : ''"
      >
        Edit profile
      </li>
      <li
        class="py-3 mx-5 opacity-75 cursor-pointer"
        @click="part = 2"
        :class="part === 2 ? ['text-green', 'border-b-4', 'border-green'] : ''"
      >
        change password
      </li>
      <li
        class="py-3 mx-5 opacity-75 cursor-pointer"
        @click="part = 3"
        :class="part === 3 ? ['text-green', 'border-b-4', 'border-green'] : ''"
      >
        change email address
      </li>
    </ul>
    <div class="w-full flex items-start" v-if="part === 1">
      <ul class="w-3/4 mt-16 flex flex-wrap text-white justify-around">
        <li class="flex flex-col mt-3">
          <label for="username" class="opacity-75 capitalize">
            first name
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
            placeholder="enter your first name"
            id="username"
            v-model="profile.first_name"
          />
        </li>
        <li class="flex flex-col mt-3">
          <label for="username" class="opacity-75 capitalize">
            last name
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
            placeholder="enter your last name"
            id="username"
            v-model="profile.last_name"
          />
        </li>
        <li class="flex flex-col mt-3">
          <label for="username" class="opacity-75 capitalize">
            Email
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
            placeholder="enter your email"
            id="username"
            v-model="email1"
          />
        </li>
        <li class="flex flex-col mt-3">
          <label for="username" class="opacity-75 capitalize">
            username
          </label>
          <input
            type="text"
            class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
            placeholder="enter your email"
            id="username"
            v-model="profile.username"
          />
        </li>
      </ul>
      <img
        src="~/assets/images/group16.svg"
        alt=""
        class="mt-5"
        style="width: 500px;"
      />
    </div>
    <form class="text-white" @submit.prevent="checkForm()" v-if="part === 2">
      <div class="w-full flex items-start mt-10">
        <div>
          <div class="w-1/2 flex flex-wrap items-center justify-between">
            <div class="flex flex-col mt-3 w-full">
              <label for="old-password" class="opacity-75 capitalize">
                current password
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
            class="px-5 py-3 font-medium bg-green my-5 rounded-2xl"
          >
            Change Password
          </button>
        </div>
        <img src="~/assets/images/group17.svg" alt="" style="width: 400px;" />
      </div>
    </form>
    <div
      v-if="part === 3"
      class="w-full flex items-center justify-center mt-10 flex-col"
    >
      <label for="username" class="opacity-75 capitalize text-white">
        E-mail
      </label>
      <input
        type="text"
        class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white text-sm"
        placeholder="enter your email"
        style="width: 500px"
        id="username"
        v-model="email"
      />
      <button class="py-3 px-5 bg-green text-white rounded-xl mt-10" @click="registerEmail()">
        send verification
      </button>
    </div>
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
      email1: "",
      email: "",
      origEmail: "",
      part: 1
    };
  },
  middleware: "Auth",
  layout: "panel",
  components: {
    PanelTitle
  },
  mounted() {
    this.profile = this.$store.state.panel.profile;
    this.email1 = this.$store.state.panel.profile.email;
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
              text: res.data.detail,
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
