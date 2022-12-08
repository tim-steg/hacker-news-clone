<template>
  <main class="mt-20 relative pageContent container w-full">
    <PostInfo :post-content="postContent" />
    <CommentSection
      :comments="postContent.comments"
      :post-id="postContent.id"
    />
  </main>
</template>

<script setup lang="ts">
import PostInfo from "@/components/posts/PostInfo.vue";
import CommentSection from "@/components/posts/CommentSection.vue";
import { usePostsStore } from "@/stores/posts";
import { ref } from "vue";
import { useRoute } from "vue-router";

const postStore = usePostsStore();
const route = useRoute();

const postContent = ref(postStore.fetchPostById(Number(route.params.id)));
</script>

<style scoped></style>
