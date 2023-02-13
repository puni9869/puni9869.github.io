<script setup>
import metadata from "@/assets/metadata.json";

</script>
<template>
  <div>
    <div class="min-vh-100 d-flex flex-column">
      <div class="my-5 container">
        <div class="row my-5">
          <div class="col" v-if="metadata">
            <h3>Talks</h3>
            <div class="row" v-for="talk in metadata" :key="talk.id">
              <p class="title"><a :href="talk.url" target="_blank">// {{ talk.title }}</a> <span>{{ talk.published }}</span>
              </p>
            </div>
          </div>
          <div v-else>No Data.</div>
        </div>
      </div>
    </div>
  </div>
</template>
