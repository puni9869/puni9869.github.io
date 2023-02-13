<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <section class="my-5 container">
      <div class="row my-5">
        <p>Page not found.</p>
        <p class="go-back">
          <router-link to="/">Go Back</router-link>
        </p>
      </div>
    </section>
  </div>
</template>
