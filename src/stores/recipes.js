import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
/**
 * Recipes Obj Structure
 * [{
 *      id: Long
 *      name: String
 *      description: String
 *      tags: [String]
 *      ingredients: [{
 *                      name  : String
 *                      amount: Decimal
 *                    }]
 *      directions:[{
 *                      direction: String
 *                  }]
 *  }]
 */
export const useRecipesStore = defineStore({
  id: "recipes",
  state: () => ({
    recipes: useStorage("recipes", []),
    size: 0,
  }),
  getters: {
    //return Recipe at given index
    getByIndex: (state) => {
      return (index) => state.recipes[index];
    },
    //return Recipe with given Id
    getById: (state) => {
      return (id) => {
        return state.recipes.filter((r) => r.id === id)[0];
      };
    },
    //return Recipe List
    getRecipes: (state) => state.recipes,
  },
  actions: {
    addRecipe(recipe) {
      //validation would be added here
      this.recipes.push(recipe);
      this.size++;
    },
    updateRecipe(recipe) {
      //validation would be added here
      this.recipes = this.recipes.map((r) => {
        if (r.id === recipe.id) {
          return {
            ...r,
            name: recipe.name,
            description: recipe.description,
            tags: recipe.tags,
            ingredients: recipe.ingredients,
          };
        }
        return r;
      });
    },
    removeRecipe(index) {
      //validation would be added here
      //TODO: update remove method to work with item id instead of index
      this.recipes.splice(index, 1);
      this.size--;
    },
  },
});
