<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="closeButton">
        <font-awesome-icon
          @click="closePopup"
          icon="fa-solid fa-circle-xmark"
        />
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";

const props = defineProps({
  popupTrigger: String,
});

document.body.style.overflow = "hidden";

const store = useStore();

const closePopup = () => {
  if (
    store &&
    props.popupTrigger &&
    props.popupTrigger in store.popupTriggers
  ) {
    store.popupTriggers[
      props.popupTrigger as keyof typeof store.popupTriggers
    ] = false;
  }

  document.body.style.overflow = "visible";
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: (0, 0, 0, 0.2);
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.popup-inner {
  position: relative;
  border: 0px;
  border-radius: 15px;
}

.closeButton {
  position: absolute;
  color: #eff9f0;
  font-size: 48px;
  top: 0;
  right: -10px;
}

.closeButton:hover {
  color: rgba(0, 0, 0, 0.2);
}
</style>
