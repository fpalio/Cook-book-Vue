<script setup>
import { useRecipesStore } from "../stores/recipes";
import { useRouter } from "vue-router";
import AddRecipeForm from "../components/forms/AddRecipeForm.vue";

const router = useRouter();

//STORE
var store = useRecipesStore();

/**
 * Saving Recipe to the Store.
 * @param newRecipe new Recipe Obj
 */
const saveRecipe = (newRecipe) => {
  //TODO:validaiton needs to be better here
  //TODO:redirect to the home page or feedback that it saved
  if (newRecipe.name.length > 0 || newRecipe.description.length > 0) {
    store.addRecipe(newRecipe);
    //return to home page
    router.push("/");
  }
};
</script>

<template>
  <h1 class="px-4 pt-4 text-xl font-bold text-orange-700">Add Recipe</h1>
  <AddRecipeForm @submit="saveRecipe" />
</template>

<style>
</style>
