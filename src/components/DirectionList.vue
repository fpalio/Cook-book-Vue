<script setup>
//PROPS
const props = defineProps({
  directionList: {
    type: Array,
    required: true,
    default: [],
  },
});

//EMITS
const emit = defineEmits(["clearDirections"]);

/**
 * Adding Direction to the Direction List
 * @param index index of ingredient inside directionList
 */
const removeDirection = (index) => {
  props.directionList.splice(index, 1);
};

/**
 * Move Direction 1 step
 * @param index index of ingredient inside directionList
 */
const moveUp = (index) => {
  var direction = props.directionList.splice(index, 1)[0];
  props.directionList.splice(index - 1, 0, direction);
};

/**
 * Adding Direction to the Direction List
 * @param index index of ingredient inside directionList
 */
const moveDown = (index) => {
  var direction = props.directionList.splice(index, 1)[0];
  props.directionList.splice(index + 1, 0, direction);
};
</script>

<template>
  <div v-if="props.directionList.length > 0">
    <div class="relative mt-2 overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs">
          <tr>
            <th scope="col" class="px-6 py-3 bg-orange-100 border"></th>
            <th scope="col" class="px-6 py-3 bg-orange-100 border">Step</th>
            <th scope="col" class="px-6 py-3 bg-orange-100 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(i, index) in props.directionList"
            v-bind:key="index"
            class="bg-white border"
          >
            <td class="px-4">
              <span
                class="px-2 py-1 font-bold text-white bg-orange-500 rounded-xl"
                >{{ index + 1 }}</span
              >
            </td>
            <td class="px-6 py-4 border">
              <span>{{ i.direction }}</span>
            </td>
            <td class="flex justify-end gap-1 px-2 py-1">
              <button
                v-if="index !== 0"
                @click="moveUp(index)"
                class="inline-flex justify-center px-2 my-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Icon
                  class="inline w-4 h-4 m-2"
                  icon="bi:arrow-up-square"
                  :inline="true"
                />
              </button>
              <button
                v-if="index != props.directionList.length - 1"
                @click="moveDown(index)"
                class="inline-flex justify-center px-2 my-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Icon
                  class="inline w-4 h-4 m-2"
                  icon="bi:arrow-down-square"
                  :inline="true"
                />
              </button>
              <button
                @click="removeDirection(index)"
                class="inline-flex justify-center px-2 my-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm  hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Icon
                  class="inline w-4 h-4 m-2"
                  icon="bx:trash"
                  :inline="true"
                />
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