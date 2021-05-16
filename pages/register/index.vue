<template>
  <div class="container mx-auto mt-24 mb-16 flex">
    <div class="w-1/2 mr-10">
      <div class="w-full bg-sec-dark py-5 px-10" style="border-radius: 75px;">
        <h2 class="text-white text-3xl font-medium">Sign up</h2>
        <span class="text-white opacity-50 text-sm">
          and enter the world of chia currency
        </span>
        <br />
        <span class="text-white opacity-50 text-sm">
          Already have an acount?
        </span>
        <nuxt-link to="/login" style="color: #1c6eb7">Sign in</nuxt-link>
        <form class="mt-10">
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
              />
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
              />
            </div>
            <div class="flex flex-col mt-3">
              <label for="password" class="opacity-75 capitalize">
                password
              </label>
              <input
                type="text"
                class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
                placeholder="enter your password"
                id="password"
              />
            </div>
            <div class="flex flex-col mt-3">
              <label for="confirm-password" class="opacity-75 capitalize">
                confirm-password
              </label>
              <input
                type="text"
                class="bg-dark p-3 my-2 rounded-xl placeholder-white placeholder-opacity-25 outline-none text-white w-56 text-sm"
                placeholder="confirm your password"
                id="confirm-password"
              />
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

          <button type="submit" @click.prevent="" class="w-full py-3 font-medium text-2xl bg-green outline-none my-5 rounded-2xl">Sign Up</button>
        </form>
      </div>
    </div>
    <div class="w-1/2 text-center relative flex flex-col items-center justify-center">
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
export default {};
</script>

<style lang="scss" scoped></style>
