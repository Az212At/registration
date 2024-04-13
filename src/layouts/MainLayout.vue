<script>
import MainButton from "@/ui/MainButton.vue";

export default {
  name: "MainLayout",
  components: { MainButton },

  methods: {
    exit() {
      localStorage.removeItem("email");

      this.$router.push({ name: "RegistrationView" });
    },
  },
};
</script>

<template>
  <div class="main-layout">
    <header>
      <MainButton label="Выйти" @click="exit" />
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
}
</style>
