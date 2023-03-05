<script setup>
import { onMounted, ref } from "vue";

let userInput = ref("");
let passwordInput = ref("");
let remmeberMe = ref(false);

/**
 * Handle the user login
 */
const loginHandler = () => {
  console.log(userInput.value);
  console.log(passwordInput.value);
  console.log(remmeberMe.value);
};
</script>

<template>
  <section  class="bg-blueGray-50">
    <div class="w-full px-4 pt-6 mx-auto lg:w-4/12">
      <div
        class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
      >
        <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
          <div class="mb-3 font-bold text-center text-blueGray-400">
            <small>Welcome to CookBook</small>
          </div>
          <form>
            <div class="relative w-full mb-3">
              <label
                class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                for="grid-password"
                >Email or Username</label
              ><input
                v-model="userInput"
                type="email"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                placeholder="Email or Username"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                for="grid-password"
                >Password</label
              ><input
                v-model="passwordInput"
                type="password"
                class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                placeholder="Password"
              />
            </div>
            <div>
              <label class="inline-flex items-center cursor-pointer"
                ><input
                  v-model="remmeberMe"
                  id="customCheckLogin"
                  type="checkbox"
                  class="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                /><span class="ml-2 text-sm font-semibold text-blueGray-600"
                  >Remember me</span
                ></label
              >
            </div>
            <div class="mt-6 text-center">
              <button
                @click="loginHandler"
                class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-orange-600 rounded shadow outline-none active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer class="relative pt-8 pb-6 mt-2">
      <div class="container px-2 mx-auto">
        <div
          class="flex flex-wrap items-center justify-center md:justify-between"
        >
          <div class="w-full px-4 mx-auto text-center md:w-6/12">@Fpalio ®</div>
        </div>
      </div>
    </footer>
  </section>
</template>

<style>
</style>