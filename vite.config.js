import { fileURLToPath, URL } from "node:url";
import { viteStaticCopy } from "vite-plugin-static-copy";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [{ src: "./CNAME", dest: "." }, { src: "./favicon.ico", dest: "." }, { src: "./404.html", dest: "." }, { src: "./src/assets/fonts", dest: "." }]
      })
    ],
    build: {
      outDir: "./docs",
      minifyWhitespace: true,
      reportCompressedSize: true,
      minify: true
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
);
