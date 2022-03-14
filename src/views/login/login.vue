<template>
  <div>登录 {{ FormData.name }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const FormData = reactive({
  name: '',
  password: '',
});
</script>

<style module lang="scss"></style>
