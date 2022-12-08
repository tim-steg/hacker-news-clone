<template>
  <div id="scroll-component">
    <PostInfo v-for="post in posts" :key="post.id" :post-content="post" />
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "@/stores/posts";
import PostInfo from "@/components/posts/PostInfo.vue";

const postStore = usePostsStore();

const posts = postStore.fetchInitialPosts();

// Gets posts for infinite scrolling functionality.
const getPosts = () => {
  window.onscroll = () => {
    const scrollComponent = document.getElementById("scroll-component");
    if (!scrollComponent) return;

    const reachedBottomOfWindow =
      scrollComponent.getBoundingClientRect().bottom < window.innerHeight;
    if (reachedBottomOfWindow) {
      posts.push(postStore.fetchAdditionalPosts(posts[posts.length - 1].id));
    }
  };
};

getPosts();
</script>

<style scoped></style>
