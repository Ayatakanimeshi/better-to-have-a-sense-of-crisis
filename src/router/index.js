import { createRouter, createWebHistory } from "vue-router";
import TopPage from "@/views/TopPage.vue";
import GeorgePage from "@/views/GeorgePage.vue";

const routes = [
  {
    path: "/",
    name: "top",
    component: TopPage,
  },
  {
    path: "/George/:hour/:minute",
    name: "George",
    component: GeorgePage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
