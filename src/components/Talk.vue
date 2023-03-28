<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { marked } from "marked";
import "highlight.js/styles/monokai-sublime.css";
import hljs from "highlight.js/lib/core";
import jsHighlight from "highlight.js/lib/languages/javascript";
import bashHighlight from "highlight.js/lib/languages/bash";

const markdown = ref("# hello world");

const compiledMarkdown = computed(() => {
  return marked(markdown.value, {
    highlight: function(markdown) {
      return hljs.highlightAuto(markdown).value;
    }
  });
});

onBeforeMount(() => {
  fetch("https://raw.githubusercontent.com/puni9869/puni9869.github.io/main/README.md")
    .then(response => response.text())
    .then(data => (markdown.value = data));

  hljs.registerLanguage("javascript", jsHighlight);
  hljs.registerLanguage("sh", bashHighlight);
  hljs.highlightAll();
});

</script>
<template>
  <div class="min-vh-100 d-flex flex-column">
    <div class="my-5 container">
      <div class="row my-5">
        <div class="col">
          <textarea v-model="markdown"></textarea>
          <div v-html="compiledMarkdown" class="markdown-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

