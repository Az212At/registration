<script>
export default {
  name: "inputBoxEmail",
};
</script>

<template>
  <div class="input-box-email">
    <input type="email" class="input-field" placeholder="Почта" />
  </div>
</template>

<style lang="scss" scoped>
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
