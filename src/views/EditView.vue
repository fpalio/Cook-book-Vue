<script setup>
import { useRecipesStore } from "../stores/recipes";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddRecipeForm from "../components/forms/AddRecipeForm.vue";

var store = useRecipesStore();
const route = useRoute();
const router = useRouter();

var id = ref(route.params.id);

/**
 * Saving Recipe to the Store.
 * @param newRecipe new Recipe Obj
 */
const updateRecipe = (Recipe) => {
  //TODO:validaiton needs to be better here
  //TODO:redirect to the home page or feedback that it saved
  if (Recipe.name.length > 0 || Recipe.description.length > 0) {
    store.updateRecipe(Recipe);
    //return to home page
    router.push("/");
  }
};
</script>

<template>
  <!-- TODO: add breadcrumb -->
  <h1 class="px-4 pt-4 text-xl font-bold text-orange-700">Edit Recipe</h1>
  <AddRecipeForm @submit="updateRecipe" :id="id" />
</template>

<style>
</style>
