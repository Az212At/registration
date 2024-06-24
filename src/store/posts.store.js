import { apiGetPosts } from "@/api/posts";
import { defineStore } from "pinia";
import API from "@/package/axios";

export const usePostsStore = defineStore("posts-store", {
  state: () => ({
    posts: [],
  }),

  actions: {
    getPosts() {
      return new Promise((resolve, reject) => {
        apiGetPosts()
          .then((response) => {
            this.posts = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

export const apiEditPosts = (id, params) => {
  return API.put(`posts/${id}`, params);
};
