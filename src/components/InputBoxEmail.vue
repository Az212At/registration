<script>
export default {
  name: "InputBoxEmail",
  emits: ["update:email"],

  props: {
    email: {
      type: String,
      default: "",
    },
  },

  methods: {
    updateEmail(value) {
      this.$emit("update:email", value);
    },
  },
};
</script>

<template>
  <div class="input-box-email">
    <input
      :value="email"
      type="email"
      class="input-field"
      placeholder="Почта"
      @input="updateEmail($event.target.value)"
    />
  </div>
</template>

<style lang="css" scoped>
.input-box-email {
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
