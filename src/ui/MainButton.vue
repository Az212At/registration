<script>
export default {
  name: "MainButton",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: "button",
    },

    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <button :type="type" class="main-button" :disabled="disabled">
    {{ label }}
  </button>
</template>

<style lang="css" scoped>
.main-button {
  border: none;
  padding: 20px 28px;
  background-color: rgba(255, 204, 73, 1);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }

  &:hover {
    background: rgba(247, 187, 35, 1);
  }

  &:active {
    background: rgba(242, 173, 0, 1);
  }
}
</style>
