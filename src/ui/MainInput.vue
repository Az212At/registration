<script>
export default {
  name: "MainInput",
  emits: ["update:email", "update:password"],

  props: {
    email: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      default: "",
    },
  },

  computed: {
    formattedValue: {
      get() {
        return this.email;
      },

      set(newValue) {
        this.$emit("update:email", newValue);
      },
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
  <div class="main-input">
    <div class="input-box-email">
      <input
        v-model="formattedValue"
        type="email"
        class="input-field"
        placeholder="Почта"
      />
    </div>
    <div class="input-box-password">
      <input
        :value="password"
        type="password"
        class="input-field"
        placeholder="Пароль"
        @input="$emit('update:password', $event.target.value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
.main-input {
}
</style>
