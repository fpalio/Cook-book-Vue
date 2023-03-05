<script setup>
import { ref, onMounted } from "vue";

const emits = defineEmits(["callback"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
});

let colorClass = ref("");
//TODO : FIND A BETTER WAY TO LOAD COLORS
onMounted(() => {
  if (props.color === "green") {
    colorClass.value = "border-green-500 hover:bg-green-500 text-green-700";
  } else if (props.color === "red") {
    colorClass.value = "border-red-500 hover:bg-red-500 text-red-700";
  } else if (props.color === "blue") {
    colorClass.value = "border-blue-500 hover:bg-blue-500 text-blue-700";
  }
});
</script>

<template>
  <button
    @click="$emit('callback')"
    class="px-4 py-2 font-semibold bg-transparent border rounded modal-default-button hover:text-white hover:border-transparent"
    :class="colorClass"
  >
    <Icon
      v-if="props.icon"
      class="inline w-4 h-4"
      :icon="props.icon"
      :inline="true"
    />
    <slot name="text"></slot>
  </button>
</template>

<style>
</style>