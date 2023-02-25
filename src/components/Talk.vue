<script setup>
const props = defineProps(["talk"]);
console.log(props);
</script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <div class="my-5 container">
      <div class="row my-5">
        <div class="col">
          {{ $route }}
        </div>
      </div>
    </div>
  </div>
</template>

