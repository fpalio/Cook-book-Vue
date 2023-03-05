<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="flex flex-wrap items-center justify-between p-6 bg-orange-700">
    <div class="flex items-center flex-shrink-0 mr-6 text-white">
      <Icon
        class="mr-2"
        icon="icon-park-solid:chef-hat-one"
        width="30"
        height="30"
        :inline="true"
      />
      <span class="text-xl font-semibold tracking-tight">Shefu.io</span>
    </div>
    <div class="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <RouterLink
          class="block mt-4 mr-4 text-orange-200  lg:inline-block lg:mt-0 hover:text-white"
          to="/"
          active-class="font-bold underline"
        >
          Home
        </RouterLink>
        <RouterLink
          class="block mt-4 mr-4 text-orange-200  lg:inline-block lg:mt-0 hover:text-white"
          to="/add"
          active-class="font-bold underline"
        >
          Add Recipe
        </RouterLink>
      </div>
      <div>
        <a
          href="/login"
          class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded  hover:border-transparent hover:text-orange-500 hover:bg-white lg:mt-0"
          >Log In</a
        >
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
</style>
