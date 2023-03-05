<script setup>
//EMITERS
const emit = defineEmits(["remove", "edit"]);

const removeEmit = () => {
  emit("remove");
};

const editEmit = () => {
  emit("edit");
};
</script>
<template>
  <button
    @click="editEmit"
    class="px-4 py-2 font-semibold text-orange-700 bg-transparent border border-orange-500 rounded  hover:bg-orange-500 hover:text-white hover:border-transparent"
  >
    <Icon class="inline w-4 h-4" icon="akar-icons:edit" :inline="true" />
    Edit
  </button>
  <button
    @click="removeEmit"
    class="px-4 py-2 font-semibold text-red-700 bg-transparent border border-red-500 rounded  hover:bg-red-500 hover:text-white hover:border-transparent"
  >
    <Icon class="inline w-4 h-4" icon="bx:trash" :inline="true" />
    Remove
  </button>
</template>

<style></style>
