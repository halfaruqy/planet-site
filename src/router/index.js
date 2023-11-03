import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlanetView from '../views/PlanetView.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:name",
    name: "Planet",
    component: PlanetView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
