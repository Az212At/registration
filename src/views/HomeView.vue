<script>
import { usePostsStore } from "@/store/posts.store";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",

  computed: {
    ...mapState(usePostsStore, {
      posts: "posts",
    }),
  },

  methods: {
    ...mapActions(usePostsStore, {
      getPosts: "getPosts",
    }),

    getUserId(id) {
      console.log(`Айидишник юзера этого поста равен ${id}`);
    },
  },

  async mounted() {
    await this.getPosts();
    this.posts.forEach((post) => {
      post.userId = undefined;
      this.getUserId(post.userId);
    });
  },
};
</script>

<template>
  <div class="home-view">
    <h3>Home</h3>

    <div class="home-view__post-container post-container">
      <div
        v-for="post in posts"
        :key="post.id"
        class="post-container__post post"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>

        <button @click="getUserId(post.userId)">
          Вывести в консоль userId
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-home-view {
}
.home-view {
  .post-container {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .post {
      background-color: rgba(182, 51, 153, 0.1);
      border: 1px solid black;
      border-radius: 8px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      > button {
        width: 100%;
        height: 40px;
        background: #ffff63;

        &:hover {
          background: #b3b343;
        }

        &:active {
          background: #7a7a1f;
        }
      }
    }
  }
}
</style>
