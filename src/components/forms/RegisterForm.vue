<template>
  <div class="flex">
    <form>
      <h3 id="form-header">Register Account</h3>

      <label for="username">Email:</label>
      <input type="text" name="username" required />

      <label for="username">Username:</label>
      <input type="text" name="username" required />

      <label for="password">Password:</label>
      <input type="password" name="password" required />

      <label for="confirm">Confirm Password:</label>
      <input type="password" name="confirm" required />

      <CustomButton class="mt-5" :bg-color="'#E84855'" :color="'white'"
        >Register</CustomButton
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  background-color: #232934;
}

label {
  color: #eff9f0;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 5px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #eff9f0;
  font-size: 22px;
}

#form-header {
  color: #eff9f0;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
</style>
