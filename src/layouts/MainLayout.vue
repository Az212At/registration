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

    about() {
      this.$router.push({ name: "AboutMeView" });
    },

    home() {
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>

<template>
  <div class="main-layout">
    <header>
      <MainButton label="Home" @click="home" />
      <MainButton label="About" @click="about" />
      <MainButton label="Выйти" @click="exit" />
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
}
</style>
