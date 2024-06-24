<script>
import { usePostsStore } from "@/store/posts.store";
import { mapActions, mapState } from "pinia";
import ModalWindow from "@/ui/ModalWindow.vue";
import { apiEditPosts } from "@/store/posts.store";

export default {
  name: "HomeView",

  components: {
    ModalWindow,
  },

  data: function () {
    return {
      showModalWindow: false,
      editedPost: {
        id: null,
        title: "",
        body: "",
      },
    };
  },

  computed: {
    ...mapState(usePostsStore, {
      posts: "posts",
    }),

    isFormValid() {
      return (
        this.editedPost.title.trim() !== "" &&
        this.editedPost.body.trim() !== ""
      );
    },
  },

  methods: {
    ...mapActions(usePostsStore, {
      getPosts: "getPosts",
    }),

    getUserId(id) {
      console.log(`Айидишник юзера этого поста равен ${id}`);
    },

    closeModal() {
      this.showModalWindow = false;
    },

    async savePost() {
      try {
        await apiEditPosts(this.editedPost.id, {
          title: this.editedPost.title,
          body: this.editedPost.body,
        });
        this.closeModal();
        await this.getPosts(); // Обновляем список постов после редактирования
      } catch (error) {
        console.error("Ошибка при сохранении поста:", error);
      }
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

        <button id="show-modal-window" @click="showModalWindow = true">
          Редактировать
        </button>

        <Teleport to="body">
          <ModalWindow :show="showModalWindow" @close="showModalWindow = false">
            <template #body>
              <form @submit.prevent="savePost">
                <div>
                  <label for="title">Заголовок:</label>
                  <input id="title" v-model="editedPost.title" type="text" />
                </div>
                <div>
                  <label for="body">Содержание:</label>
                  <textarea id="body" v-model="editedPost.body"></textarea>
                </div>
                <button type="submit" :disabled="!isFormValid">
                  Сохранить
                </button>
              </form>
            </template>
          </ModalWindow>
        </Teleport>
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
