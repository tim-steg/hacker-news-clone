import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";

// For managing posts and the comments for each post.
export const usePostsStore = defineStore("posts", () => {
  interface Comment {
    author: string;
    content: string;
  }

  interface Post {
    id: number;
    title: string;
    author: string;
    date: Date;
    link: string;
    score: number;
    comments: Comment[];
  }

  const posts: Ref<Post[]> = ref([
    {
      id: 1,
      title: "Google Pixel",
      author: "timsteg",
      date: new Date("12/1/2022"),
      link: "https://store.google.com/product/pixel_7?hl=en-US",
      comments: [
        {
          author: "timsteg",
          content: "Wow the new Pixel 7 looks great!",
        },
        {
          author: "emma",
          content: "I completely agree!",
        },
      ],
      score: 0,
    },
  ]);

  // Fetches from example array of posts. Normally with a back-end we'd make an SQL query here for an array of objects like the example gives.
  const fetchInitialPosts = (): Post[] => {
    return posts.value;
  };

  // For the infinite scollbar functionality. In this case it simply adds a new example post.
  const fetchAdditionalPosts = (startAt: number): Post => {
    return {
      id: startAt + 1,
      title: `Post #${startAt + 1}`,
      author: `Author #${startAt + 1}`,
      date: new Date(`December ${startAt + 1} 2022`),
      link: "https://vuejs.org",
      score: 0,
      comments: [],
    };
  };

  // Fetches the first post found by the 'id' key
  const fetchPostById = (id: number): Post => {
    return posts.value.filter(function (item) {
      return id === item.id;
    })[0];
  };

  // Adds a new post to the example 'posts' array. Normally we would push a new row to a table in the database.
  const addNewPost = (post: any) => {
    post.id = posts.value.length + 1;
    posts.value.push(post);
    console.log(posts.value);
  };

  // Add a new comment to an already existing post.
  const addNewComment = (id: number, text: string, author: string) => {
    const post = posts.value.filter(function (item) {
      return id === item.id;
    })[0];
    if (post)
      post.comments.push({
        author: author,
        content: text,
      });

    console.log(posts);
  };

  return {
    fetchInitialPosts,
    fetchAdditionalPosts,
    fetchPostById,
    addNewPost,
    addNewComment,
  };
});
