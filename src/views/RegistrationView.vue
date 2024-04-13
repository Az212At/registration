<script>
import MainInput from "@/ui/MainInput.vue";
import MainButton from "@/ui/MainButton.vue";

export default {
  name: "RegistrationView",
  components: { MainButton, MainInput },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    validateForm() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(this.email);
      const isPasswordValid = this.password.trim().length >= 8;

      return isEmailValid && isPasswordValid;
    },
  },

  methods: {
    registration() {
      if (this.validateForm) {
        localStorage.setItem("email", this.email);

        this.$router.push({
          name: "HomeView",
        });
      }
    },
  },
};
</script>

<template>
  <div class="registration-view">
    <form class="form" @submit.prevent="registration">
      <MainInput v-model="email" placeholder="Введите почту" type="email" />

      <MainInput
        v-model="password"
        placeholder="Введите пароль"
        type="password"
      />

      <MainButton :disabled="!validateForm" type="submit" label="Войти" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.registration-view {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
