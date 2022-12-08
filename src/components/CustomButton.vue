<template>
  <div>
    <button class="customButton" @click.prevent="props.onClick">
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["onClick", "bgColor", "color"]);

// Custom props to change the button styling.
const style = computed(() => {
  return {
    bgColor: props["bgColor"],
    color: props["color"],
  };
});
</script>

<style scoped>
.customButton {
  font-size: 1rem;
  font-weight: 600;
  border: 0px;
  color: v-bind("style.color");
  background-color: v-bind("style.bgColor");
  border-radius: 15px;
  padding: 0;
  @apply px-6 py-2;
}

.customButton:hover {
  background-color: #8c97a8;
}
</style>
