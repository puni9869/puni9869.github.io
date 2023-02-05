<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <p>Page not found.</p>
    <p class="go-back">
    <router-link to="/">Go Back</router-link>
    </p>
  </div>
</template>
<style scoped>
.go-back {
  text-align: center;
  line-height: 35px;
}
</style>