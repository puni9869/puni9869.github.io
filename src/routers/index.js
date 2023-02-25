import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/components/NotFound.vue";
import Talk from "@/components/Talk.vue";
import Intro from "@/components/Intro.vue";

const routes = [
  { path: "", name: "home", component: Home },
  {
    path: "/talks",
    name: "talks",
    component: () => import("@/views/Talks.vue")
  },
  { path: "/404", name: "NotFound", component: NotFound },
  {
    path: "/:talk",
    name: "talk",
    component: Talk,
    props: (route) => {
      return { talk: route.params.talk };
    }
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
