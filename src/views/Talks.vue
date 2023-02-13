<script setup>
import metadata from "@/assets/metadata.json";

</script>
<template>
  <div>
    <div class="min-vh-100 d-flex flex-column">
      <div class="my-5 container">
        <div class="row my-5">
          <div class="col" v-if="metadata">
            <p>
              <router-link to="/">
                <button class="btn btn-sm"><i class="fa fa-home"></i></button>
              </router-link>
              Talks
            </p>
            <div class="row" v-for="talk in metadata" :key="talk.id">
              <p class="title">
                // <a :href="talk.url" target="_blank">{{ talk.title }}</a> <span> {{ talk.published }}</span>
              </p>
            </div>
          </div>
          <div v-else>No Data.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  background-color: cadetblue;
  border-radius: 0px;
  color: white;
  padding: 0 5px 0 5px;
  font-size: 15px;
  margin-top: 0px;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
}

.btn:hover {
  background-color: black;
  color: white
}
</style>
