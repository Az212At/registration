<script>
export default {
  name: "ButtonRegistration",
  emits: ["submitForm"],

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: "button",
    },
  },

  methods: {
    submitForm() {
      this.$emit("submitForm");
    },
  },
};
</script>

<template>
  <button :type="type" class="btn" :disabled="disabled" @click="submitForm">
    Войти
  </button>
</template>

<style lang="css" scoped>
.btn {
  border: none;
  padding: 20px 28px;
  background-color: blue;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
}
</style>
