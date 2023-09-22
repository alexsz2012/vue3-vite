import { createRouter, createWebHistory } from 'vue-router';
// import type { RouteRecordRaw } from 'vue-router';
import routes from './router.config';
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})