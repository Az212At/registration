<script>
export default {
  name: "MainInput",
  emits: ["update:modelValue"],

  props: {
    modelValue: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },
  },

  computed: {
    formattedValue: {
      get() {
        return this.modelValue;
      },

      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>

<template>
  <div class="main-input">
    <input v-model="formattedValue" :type="type" :placeholder="placeholder" />
  </div>
</template>

<style lang="scss" scoped>
.main-input {
  > input {
    display: block;
    width: 100%;
    border: 1px solid #1818ff;
    border-radius: 0;
    padding: 20px 28px;
    margin-bottom: 5px;
    font-size: 20px;

    &:hover {
      border: 1px solid red;
    }

    &:focus {
      border: 1px solid black;
    }
  }
}
</style>
