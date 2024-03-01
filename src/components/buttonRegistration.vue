<script>
export default {
  name: "button",
};
</script>

<template>
  <div class="button">
    <button type="submit" class="btn">Войти</button>
  </div>
</template>

<style lang="scss" scoped>
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
