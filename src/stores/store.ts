import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";

// State store for the whole app.
export const useStore = defineStore("store", () => {
  // Triggers for popups.
  const popupTriggers = ref({
    loginTrigger: false,
    registerTrigger: false,
    createPostTrigger: false,
  });

  // Test login boolean. We would use some sort of authentication library like OAuth if we had a backend.
  const loggedIn = ref<boolean>(false);

  return { popupTriggers, loggedIn };
});
