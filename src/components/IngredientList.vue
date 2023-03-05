<script setup>
//PROPS
const props = defineProps({
  ingredientList: {
    type: Array,
    required: true,
    default: [],
  },
});

//EMITS
const emit = defineEmits(["clearIngredients"]);

/**
 * Adding Ingrediant to the Ingredient List
 * @param index index of ingredient inside IngredientList
 */
const removeIngrediant = (index) => {
  props.ingredientList.splice(index, 1);
};
</script>

<template>
  <div v-if="props.ingredientList.length > 0">
    <div class="relative mt-2 overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs">
          <tr>
            <th class="px-6 py-3 bg-orange-100 border">Name</th>
            <th class="px-6 py-3 bg-orange-100 border">Amount</th>
            <th class="px-6 py-3 bg-orange-100 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in props.ingredientList" v-bind:key="i.name" cl>
            <td class="border">{{ i.name }}</td>
            <td class="border">{{ i.amount }}</td>
            <td class="w-24 px-4 border">
              <button
                @click="removeIngrediant(index)"
                type="submit"
                class="inline-flex justify-center px-4 my-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm  hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Icon class="inline w-4 h-4" icon="bx:trash" :inline="true" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>