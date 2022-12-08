<template>
  <div class="commentSectionWrapper">
    <div class="p-10" v-if="store.loggedIn">
      <form>
        <textarea
          name="commentContent"
          id="newComment"
          rows="5"
          cols="35"
          style="color: gray"
        ></textarea>
        <CustomButton :bg-color="'#7c8a9e'" :on-click="addComment"
          >Add Comment</CustomButton
        >
      </form>
    </div>
    <div class="mx p-5">
      <div class="mb-5" v-for="comment in comments">
        <span class="italic text-lg">{{ comment.author }}</span>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import { usePostsStore } from "@/stores/posts";
import { useStore } from "@/stores/store";

const store = useStore();

const props = defineProps(["comments", "postId"]);

const posts = usePostsStore();

// Adds a new comment. Normally we would have a store that would be created when we load a post to
// keep track of the comments, query the database, etc but in this case we are just pushing to that example array.
const addComment = () => {
  const newComment = document.getElementById(
    "newComment"
  ) as HTMLTextAreaElement;
  if (newComment.value)
    posts.addNewComment(props.postId, newComment.value, "timsteg");
};
</script>

<style scoped>
.commentSectionWrapper {
  background-color: #121420;
}
</style>
