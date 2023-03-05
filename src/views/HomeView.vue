<script setup>
import { useRecipesStore } from "../stores/recipes";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import RecipeActions from "../components/RecipeActions.vue";
import Modal from "../components/basic/Modal.vue";

const router = useRouter();
var store = useRecipesStore();
var recipes = store.getRecipes;
var size = ref(recipes.length);

var showModal = ref(false);

//Removeing a reciepie from the store
// @param index of the recipe
const removeRecipe = (index) => {
  store.removeRecipe(index);
  size.value--;
};

//Editing a reciepie from the store
// @param index of the recipe
const editRecipe = (id) => {
  router.push("/edit/" + id);
};

//ModalCallback test
const modalCallback = () => {
  alert("worked");
};
</script>

<template>
  <div class="container">
    <div class="flex justify-center w-full">
      <table class="w-3/4 mt-6 border-2 rounded-lg table-auto">
        <thead class="">
          <tr>
            <th class="px-4 py-2 bg-orange-200 border-2">Id</th>
            <th class="px-4 py-2 bg-orange-200 border-2">Name</th>
            <th class="px-4 py-2 bg-orange-200 border-2">Description</th>
            <th class="px-4 py-2 bg-orange-200 border-2">Tags</th>
            <th class="px-4 py-2 bg-orange-200 border-2">Actions</th>
          </tr>
        </thead>
        <tbody v-if="size > 0">
          <tr v-for="(r, index) in recipes" v-bind:key="r.id">
            <td class="px-4 py-2 border">{{ index }}</td>
            <td class="px-4 py-2 border">
              <a href="#" class="text-orange-400 underline">{{ r.name }}</a>
            </td>
            <td class="px-4 py-2 border">{{ r.description }}</td>
            <td class="px-4 py-2 border">
              <span v-for="tag in r.tags" v-bind:key="tag">
                <span
                  class="px-2 py-1 mx-1 text-xs text-white bg-orange-500 rounded-full  font-small"
                >
                  {{ tag }}
                </span>
              </span>
            </td>
            <td class="flex justify-center gap-1 px-4 py-2 border">
              <RecipeActions
                @remove="removeRecipe(index)"
                @edit="editRecipe(r.id)"
              />
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr align="center">
            <td colspan="5">
              <Icon class="inline" icon="bx:no-entry" :inline="true" />
              <span>No Records</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- MODAL EXAMPLE AND HOW TO IMPLEMENTI IT -->
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <Modal
      :show="showModal"
      @callback="modalCallback"
      @close="showModal = false"
    >
      <template #header>
        <h3>Custom Modal</h3>
      </template>
      <template #body>
        <!-- ADD MODAL BODY HERE -->
      </template>
    </Modal>
  </Teleport>
</template>

<style scoped></style>
