<script setup>
import { useRecipesStore } from "../stores/recipes";
import { useRouter } from "vue-router";
import LoginForm from "../components/forms/LoginForm.vue";

const router = useRouter();

//STORE
var store = useRecipesStore();
</script>

<template>
  <LoginForm />
</template>

<style>
</style>
