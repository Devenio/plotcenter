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
        <form class="mt-10">
          <div class="flex flex-col mt-3">
            <label for="username" class="opacity-75 capitalize">
              username
            </label>
            <input
              type="text"
              class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
              placeholder="enter your username"
              id="username"
            />
          </div>
          <div class="flex flex-col mt-3">
            <label for="password" class="opacity-75 capitalize">
              password
            </label>
            <input
              type="text"
              class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-full text-sm"
              placeholder="enter your password"
              id="password"
            />
            <a style="color: #1c6eb7" class="cursor-pointer">Forgot your password?</a>
          </div>

          <button
            type="submit"
            @click.prevent=""
            class="w-full py-3 font-medium text-2xl bg-green outline-none my-5 rounded-2xl"
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
export default {};
</script>

<style lang="scss" scoped></style>
