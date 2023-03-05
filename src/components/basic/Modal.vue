<script setup>
import { ref } from "vue";
import Button from "../basic/Button.vue";
const emits = defineEmits(["close", "callback"]);

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  smallModal: {
    type: Boolean,
  },
});

var size = ref("");

/**
 * INIT
 */
//TODO implement different sized of modals itll save time in the future
// onMounted(() => {
//   if (props.smallModal) {
//     size.value = "m-69 modal-container";
//   } else {
//     size.value = "m-36 ";
//   }
// });

const clickHandler = () => {
  $emit("callback");
  $emit("close");
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="m-36 modal-container">
          <div
            class="w-full p-2 text-2xl font-bold text-orange-700 modal-header"
          >
            <slot name="header">default header</slot>
          </div>

          <div class="p-2 modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <div class="flex justify-end gap-2">
              <Button
                color="blue"
                icon="line-md:circle-to-confirm-circle-transition"
                @click="clickHandler"
              >
                <template #text>
                  <slot name="action">Ok </slot>
                </template>
              </Button>
              <Button
                color="red"
                icon="line-md:close-circle"
                @click="$emit('close')"
              >
                <template #text> Close </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

// styleing handles the transition as well 
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  border-bottom: black 1px solid;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>