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
