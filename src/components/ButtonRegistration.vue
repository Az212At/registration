<script>
export default {
  name: "ButtonRegistration",
  emits: ["submitForm"],

  props: {
    isFormValid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="button">
    <button
      type="submit"
      class="btn"
      :disabled="!isFormValid"
      @click="$emit('submitForm')"
    >
      Войти
    </button>
  </div>
</template>

<style lang="css" scoped>
.button {
}
.btn {
  border: none;
  padding: 20px 28px;
  background-color: blue;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}
</style>
