<script>
import InputBoxRegistration from "@/components/InputBoxRegistration.vue";
export default {
  name: "MyRegistration",

  components: {
    InputBoxRegistration,
  },
};
</script>

<template>
  <InputBoxRegistration />
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px;
}

.form {
  display: block;
  width: 500px;
}
</style>
