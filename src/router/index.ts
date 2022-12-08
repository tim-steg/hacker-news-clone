import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ViewPost from "@/components/posts/ViewPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/post/:id",
      name: "Post",
      component: ViewPost,
    },
  ],
});

export default router;
