<script setup>
//IMPORTS
import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useRoute } from "vue-router";
//STORES
import { useRecipesStore } from "../../stores/recipes";
//COMPONENTS
import IngredientList from "../IngredientList.vue";
import DirectionList from "../DirectionList.vue";

var store = useRecipesStore();
const emit = defineEmits(["submit"]);

var id = ref("");
var name = ref("");
var description = ref("");
var tags = ref("");
var ingredientInput = ref("");
var ingredientList = ref([]);
var directionInput = ref("");
var directionList = ref([]);

/**
 * Props
 */
const props = defineProps({
  id: {
    type: String,
  },
});

/**
 * INIT
 */
onMounted(() => {
  if (props.id) {
    var currentRecipe = store.getById(props.id);
    //TODO: remove
    //console.log(currentRecipe);
    id.value = props.id;
    name.value = currentRecipe.name;
    description.value = currentRecipe.description;
    tags.value = currentRecipe.tags.join(",");
    ingredientList.value = currentRecipe.ingredients;
    directionList.value = currentRecipe.directions;
  } else {
    id.value = uuidv4();
  }
});

/**
 * Emitings Click callback
 */
const clickEmit = () => {
  emit("submit", {
    id: id.value,
    name: name.value,
    description: description.value,
    tags: tags.value.split(",").map((tag) => tag.trim("")),
    ingredients: ingredientList.value,
    directions: directionList.value,
  });
};

/**
 * Adding Ingrediant to the Ingredient List
 */
const addIngredient = (event) => {
  event.preventDefault();
  let ing = ingredientInput.value.split(",");
  if (!ingredientList.value.includes(ing[0])) {
    ingredientList.value.push({
      name: ing[0],
      amount: ing[1],
    });
  }
  //TODO: need feedback for when ingredient already exists
  //clearing the field
  ingredientInput.value = "";
};

/**
 * Clear Ingredient Input
 */
const clearIngredientInput = () => {
  ingredientInput.value = "";
};

/**
 * Adding Direction to the Ingredient List
 */
const addDirection = (event) => {
  event.preventDefault();
  let directionIndex = directionList.value.length + 1;
  let directionText = directionInput.value;
  directionList.value.push({
    index: directionIndex,
    direction: directionText,
  });

  //TODO: need feedback for when ingredient already exists
  //clearing the field
  directionInput.value = "";
};

/**
 * Clear directions Input
 */
const clearDirectionInput = () => {
  directionInput.value = "";
};
</script>

<template>
  <form @submit.prevent>
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="flex mt-1 rounded-md shadow-sm">
              <input
                v-model="name"
                type="text"
                id="name"
                class="flex-1 block w-full border-gray-300 rounded-none  focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                placeholder="Doughnuts, Zaganaki ..."
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label for="desc" class="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div class="flex mt-1 rounded-md shadow-sm">
              <input
                v-model="description"
                type="textArea"
                id="desc"
                class="flex-1 block w-full border-gray-300 rounded-none  focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                placeholder="What is this plate...?"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label for="tags" class="block text-sm font-medium text-gray-700">
              Tags (Comma Separated [,])
            </label>
            <div class="flex mt-1 rounded-md shadow-sm">
              <input
                v-model="tags"
                type="text"
                id="tags"
                class="flex-1 block w-full border-gray-300 rounded-none  focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                placeholder="Dessert, Dinner, Lunch... "
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700">
              Ingredients(Comma Separated [,])
            </label>
            <div class="flex p-1 mt-1 border-2 rounded-md shadow-sm">
              <input
                v-model="ingredientInput"
                type="text"
                name="recipe_ingredients"
                id="ingredients"
                class="flex-1 block w-full border-gray-300 rounded-none  focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                placeholder="EX. (Sugar,12g)"
              />
              <button
                @click="addIngredient"
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm  hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                + Add Ingrediant
              </button>
            </div>
            <IngredientList
              :ingredientList="ingredientList"
              @clearIngredients="clearIngredientInput"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700">
              Directions
            </label>
            <div class="flex p-1 mt-1 border-2 rounded-md shadow-sm">
              <input
                v-model="directionInput"
                type="text"
                name="recipe_directions"
                id="directions"
                class="flex-1 block w-full border-gray-300 rounded-none  focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                placeholder="Cook in over at 450 Degrees for 45min...."
              />
              <button
                @click="addDirection"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm  hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                + Add Direction
              </button>
            </div>
            <DirectionList
              :directionList="directionList"
              @clearDirections="clearDirectionInput"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
        <button
          @click="clickEmit"
          type="submit"
          class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Icon
            class="mr-2"
            icon="entypo:save"
            width="20"
            height="20"
            :inline="true"
          />
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<style>
</style>