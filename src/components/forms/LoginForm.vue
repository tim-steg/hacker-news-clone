<template>
  <form id="loginForm" class="popupForm">
    <h3 id="form-header">Account Login</h3>

    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />

    <div class="text-red-700 mt-2" style="font-weight: 900" id="error"></div>

    <CustomButton
      class="mt-5 text-base"
      :bg-color="'#E84855'"
      :on-click="login"
      :color="'white'"
      >Login</CustomButton
    >
  </form>
</template>

<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import { useStore } from "@/stores/store";

const store = useStore();

const login = () => {
  const username = document.getElementById("username") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const errorTag = document.getElementById("error");

  // NOTE: This is just here to show-off the project before I can get a backend and database thrown together.
  if (
    username &&
    password &&
    username.value === "timsteg" &&
    password.value === "1234"
  ) {
    store.loggedIn = true;
    store.popupTriggers.loginTrigger = false;
    return;
  }

  if (errorTag) errorTag.innerHTML = "Error: Incorrect Username or Password.";
};
</script>
