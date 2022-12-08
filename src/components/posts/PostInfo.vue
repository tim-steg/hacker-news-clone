<template>
  <div :id="postContent.id" class="postHeading">
    <div>
      <h3 class="postTitle">
        <a :href="`${props.postContent.link}`"
          >{{ postContent.title }} ({{ link }})</a
        >
      </h3>
      <hr />
      <p>
        {{ postContent.score }} points by
        <RouterLink :to="`/user/${postContent.author ?? 'NotFound'}`">{{
          postContent.author
        }}</RouterLink
        >, {{ date }} |
        <RouterLink
          class="italic mt-2"
          :to="`/post/${postContent.id ?? 'NotFound'}`"
          >Comments</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["postContent"]);

// Converts date in the post object to a human-readable/more compact format.
const date = props.postContent.date.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

// Gets base domain from link in post object.
let url = new URL(props.postContent.link);
let link = url.host;
</script>

<style scoped>
p {
  overflow: hidden;
  text-overflow: clip;
}
</style>
