<script>
import ButtonRegistration from "@/ui/ButtonRegistration.vue";
import MainInput from "@/ui/MainInput.vue";

export default {
  name: "InputBoxRegistration",

  components: {
    ButtonRegistration,
    MainInput,
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
  <div class="input-box-registration">
    <div class="container">
      <form id="registration-form" class="form" @submit.prevent="login">
        <MainInput v-model="email" placeholder="Enter email" />
        <MainInput v-model="password" placeholder="Enter password" />

        <ButtonRegistration :disabled="!validateForm" type="submit" />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-box-registration {
}
</style>
