<script setup>
const redirectTo = "https://github.com/puni9869/tech-talks#tech-talks";
setTimeout(() => {
  window.location = redirectTo;
}, 1000);
</script>

<template>
  <div id="container">
    Redirecting to
    <a :href="redirectTo" target="_blank">
      https://github.com/puni9869/tech-talks#tech-talks
    </a>
  </div>
</template>
