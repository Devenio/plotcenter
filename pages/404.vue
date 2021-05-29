<template>
    <div class="container mx-auto text-white text-center">
        <img src="~/assets/images/404.svg" alt="" class="mx-auto mt-16">
        <h1 class="text-3xl mt-10">Ooops..!</h1>
        <h3 class="opacity-50">you have been lost in pages.</h3>
        <nuxt-link tag="button" to="/" class="mt-10 bg-green rounded-xl px-5 py-3 mx-5">Home</nuxt-link>
        <nuxt-link tag="button" to="/dashboard" class="mt-16 border-2 border-green rounded-xl px-5 py-3 mx-5 mb-24">Dashboard</nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>