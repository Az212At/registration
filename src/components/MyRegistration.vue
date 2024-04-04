<script>
import InputBoxEmail from "../ui/InputBoxEmail.vue";
import InputBoxPassword from "../ui/InputBoxPassword.vue";
import ButtonRegistration from "../ui/ButtonRegistration.vue";
export default {
  name: "MyRegistration",

  components: {
    InputBoxEmail,
    InputBoxPassword,
    ButtonRegistration,
  },

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
    login() {
      if (this.validateForm) {
        localStorage.setItem("email", this.email);
        this.$router.push("/myHome");
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <form id="registration-form" class="form" @submit.prevent="login">
      <InputBoxEmail v-model="email" />

      <InputBoxPassword v-model="password" />

      <ButtonRegistration :disabled="isFormValid" type="submit" />
    </form>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px;
}

.form {
  display: block;
  width: 500px;
}
</style>
