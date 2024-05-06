import { apiGetPosts } from "@/api/posts";
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts-store", {
  state: () => ({
    posts: [],
  }),

  actions: {
    getPosts() {
      return new Promise((resolve, reject) => {
        apiGetPosts()
          .then((response) => {
            this.posts = response.data.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
