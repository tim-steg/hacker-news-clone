<template>
  <!--
    NavBar for the whole application.
  -->

  <header class="fixed top-0 z-50 left-0 w-full">
    <nav class="navBar flex flex-wrap items-center">
      <div class="flex" style="font-size: 2.25rem">
        <span class="ml-10 mr-5 font-bold"
          ><span style="color: #e84855">T</span>acker News</span
        >
      </div>
      <div class="flex">
        <RouterLink to="/">
          <button class="navBarButton">Home</button>
        </RouterLink>
      </div>
      <div
        class="flex md:flex md:flex-grow flex-row justify-end space-x-2 mr-8"
      >
        <div v-if="!store.loggedIn">
          <CustomButton :bg-color="'#7c8a9e'" :on-click="clickLogin">
            Login
          </CustomButton>
        </div>
        <div v-if="!store.loggedIn">
          <CustomButton :bg-color="'#7c8a9e'" :on-click="clickRegister">
            Register
          </CustomButton>
        </div>

        <div v-if="store.loggedIn">
          <CustomButton :bg-color="'#7c8a9e'" :on-click="clickCreatePost">
            Create Post
          </CustomButton>
        </div>
        <div v-if="store.loggedIn">
          <CustomButton :bg-color="'#7c8a9e'" :on-click="clickLogout">
            Logout
          </CustomButton>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
import CustomButton from "@/components/CustomButton.vue";

const store = useStore();

// NOTE: These are placeholder functions since I don't have a back-end or database setup. Just for demonstration purposes.
const clickLogin = () => {
  store.popupTriggers.loginTrigger = true;
};

const clickRegister = () => {
  store.popupTriggers.registerTrigger = true;
};

const clickLogout = () => {
  store.loggedIn = false;
};

const clickCreatePost = () => {
  store.popupTriggers.createPostTrigger = true;
};
</script>

<style scoped>
.navBar {
  height: 65px;
  background-color: rgba(113, 128, 150, 1);
  box-shadow: 0 0 25px rgba(113, 128, 150, 0.6);
  padding: 0;
}

.navBarButton {
  font-size: 1rem;
  font-weight: 600;
  border: 0px;
  background-color: rgba(124, 138, 158, 1);
  border-radius: 15px;
  padding: 0;
  @apply px-6 py-2;
}

.navBarButton:hover {
  background-color: #8c97a8;
}
</style>
