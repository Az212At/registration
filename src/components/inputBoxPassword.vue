<script>
export default{
  name: "inputBoxPassword",
};
</script>

<template>
  <div class="input-box-password">
    <input type="password" class="input-field" placeholder="Пароль">
  </div>
</template>

<style lang="scss" scoped>
.input-box-password {}
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