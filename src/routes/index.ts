import { createRouter, createWebHistory } from 'vue-router';
// import type { RouteRecordRaw } from 'vue-router';
import {accessRoutes} from './data';
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: accessRoutes
})