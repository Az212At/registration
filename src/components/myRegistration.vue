<script>
import inputBoxEmail from "./inputBoxEmail.vue";
import inputBoxPassword from "./inputBoxPassword.vue";
import buttonRegistration from "./buttonRegistration.vue";

export default {
  components: {
    inputBoxEmail,
    inputBoxPassword,
    buttonRegistration,
  },
};
</script>

<template>
  <div class="container">
    <form class="form" id="registration-form">
      <input-box-email></input-box-email>
      <input-box-password></input-box-password>
      <buttonRegistration></buttonRegistration>
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
