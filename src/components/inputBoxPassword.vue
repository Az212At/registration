<script>
export default {
  name: "InputBoxPassword",
};
</script>

<template>
  <div class="input-box-password">
    <input
      v-model="password"
      type="password"
      class="input-field"
      placeholder="Пароль"
      @input="validateForm"
    />
  </div>
</template>

<style lang="css" scoped>
.input-box-password {
}
.input-field {
  display: block;
  width: 100%;
  border: 1px solid blue;
  border-radius: 0;
  padding: 20px 28px;
  margin-bottom: 5px;
  font-size: 20px;
}
</style>
