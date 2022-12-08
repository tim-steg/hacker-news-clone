<template>
  <div class="flex flex-col h-screen">
    <!--  
      Main component for the application which renders the Navbar and 
      then the component set in the RouterView, as well as conditionally renders a few popups.
    -->

    <NavBar />

    <RouterView />

    <Popup
      v-if="store.popupTriggers.loginTrigger"
      :popup-trigger="'loginTrigger'"
    >
      <LoginForm />
    </Popup>
    <Popup
      v-if="store.popupTriggers.registerTrigger"
      :popup-trigger="'registerTrigger'"
    >
      <RegisterForm />
    </Popup>
    <Popup
      v-if="store.loggedIn && store.popupTriggers.createPostTrigger"
      :popup-trigger="'registerTrigger'"
    >
      <CreatePostForm />
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Popup from "@/components/Popup.vue";
import { useStore } from "@/stores/store";
import LoginForm from "@/components/forms/LoginForm.vue";
import RegisterForm from "@/components/forms/RegisterForm.vue";
import CreatePostForm from "@/components/forms/CreatePostForm.vue";

const store = useStore();
</script>
