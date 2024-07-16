import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/components/Task.vue";

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
