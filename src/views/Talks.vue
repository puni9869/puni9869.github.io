<script setup>
import metadata from "@/assets/metadata.json";

</script>

<template>

  <div id="container" v-if="metadata">
    <h3>Talks</h3>
    <div class="row" v-for="talk in metadata" :key="talk.id">
      <p class="title"><a :href="talk.url" target="_blank">// {{ talk.title }}</a> <span>{{ talk.published }}</span>
      </p>
    </div>
  </div>
  <div v-else>No Data.</div>
</template>

<style scoped>

h3 {
  border-bottom: black;
}

.row {
  display: flex;
  flex-direction: row;
  padding: 0;
  align-content: stretch;
  justify-content: center;
}

.title a {
  margin-right: 20px;
  cursor: pointer;
  color: blue;
}


@media (min-width: 481px) and (max-width: 767px) {
  .title a {
    color: white;
  }
}
</style>