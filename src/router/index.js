import { createWebHistory, createRouter } from "vue-router";
import IndexPage from "@/views/IndexPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: IndexPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
