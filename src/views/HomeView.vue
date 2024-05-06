<script>
export default {
  name: "HomeView",

  mounted() {
    function usePostStore() {
      return undefined;
    }

    const postStore = usePostStore();

    postStore.getPosts();
  },
};
</script>

<template>
  <div class="home-view">
    <h3>Home</h3>
  </div>
</template>

<style lang="scss" scoped>
.my-home-view {
}
</style>
