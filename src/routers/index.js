import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/talks", name: "talks", component: () => import("@/views/Talks.vue")
  },
  { path: "/:catchAll(.*)", redirect: "404" },
  { path: "/404", name: "NotFound", component: NotFound }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
