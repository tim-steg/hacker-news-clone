<template>
  <form id="createPostForm" class="popupForm">
    <h3 id="form-header">Create New Post</h3>

    <label for="username">Title:</label>
    <input type="text" id="title" name="title" required />

    <label for="link">Link:</label>
    <input type="text" id="link" name="link" required />

    <CustomButton
      class="mt-5"
      :bg-color="'#E84855'"
      :on-click="createPost"
      :color="'white'"
      >Create</CustomButton
    >
  </form>
</template>

<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import { usePostsStore } from "@/stores/posts";
import { useStore } from "@/stores/store";

const posts = usePostsStore();

const store = useStore();

const createPost = () => {
  const title = document.getElementById("title") as HTMLInputElement;
  const link = document.getElementById("link") as HTMLInputElement;
  posts.addNewPost({
    title: title.value,
    author: store.loggedIn,
    date: new Date(),
    link: link.value,
    score: 0,
    comments: [],
  });

  store.popupTriggers.createPostTrigger = false;
};
</script>

<style scoped></style>
