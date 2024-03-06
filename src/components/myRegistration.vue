<script>
import inputBoxEmail from "./inputBoxEmail.vue";
import inputBoxPassword from "./inputBoxPassword.vue";
import buttonRegistration from "./buttonRegistration.vue";
export default {
  name: "MyRegistration",

  components: {
    InputBoxEmail: inputBoxEmail,
    InputBoxPassword: inputBoxPassword,
    ButtonRegistration: buttonRegistration,
  },

  data() {
    return {
      email: "",
      password: "",
      isFormValid: false,
    };
  },

  methods: {
    validateForm() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(this.email);
      const isPasswordValid = this.password.trim().length >= 8;

      this.isFormValid = isEmailValid && isPasswordValid;
    },

    login() {
      if (this.isFormValid) {
        localStorage.setItem("email", this.email);
        this.$router.push("/myHome");
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <form id="registration-form" class="form">
      <InputBoxEmail></InputBoxEmail>
      <InputBoxPassword></InputBoxPassword>
      <ButtonRegistration></ButtonRegistration>
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
