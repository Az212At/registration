import API from "@/package/axios";
import { defineStore } from "pinia";

export const apiGetPosts = () => {
  return API.get("posts");
};
defineStore("posts-store", {
  state: () => ({
    posts: [],
  }),

  actions: {
    async getPosts() {
      try {
        const response = await apiGetPosts();
        this.posts = response.data; // Заполняем массив posts данными
        return response; // Возвращаем ответ
      } catch (error) {
        console.error("Ошибка при получении постов:", error);
        throw error; // Пробрасываем ошибку дальше
      }
    },
  },
});
