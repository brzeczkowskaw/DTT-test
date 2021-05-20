import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Random from "../views/Random.vue";
import Meal from "../views/Meal.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/random",
    name: "Random",
    component: Random,
  },
  {
    path: "/meal/:category/:id",
    name: "Meal",
    component: Meal,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
