import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import router from "./routers";

const app = createApp(App);
app.use(router);
app.config.globalProperties.window = window;
app.mount("#app");
