import type { RouteRecordRaw } from 'vue-router';
import BasicLayout from '/@/layout/index.vue';
import BlankLayout from '/@/layout/BlankLayout.vue';
export const accessRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'app',
    component: BasicLayout,
    redirect: '/app/home',
    meta: { title: '管理平台' },
    children: [
      {
        path: '/app/home',
        component: () => import('/@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'liulanqi',
          auth: ['home']
        }
      },
      {
        path: '/app/subComponent',
        component: () => import('/@/views/subComponent/index.vue'),
        name: 'subComponent',
        meta: {
          title: '子组件',
          icon: 'jiedianguanli',
          auth: ['subComponent']
        }
      },
      {
        path: '/sys/account',
        name: 'account',
        component: () => import('/@/views/account/index.vue'),
        meta: { title: '用户管理', keepAlive: true, breadcrumb: true },
      },
    ]
  }
];

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    name: 'login',
    meta: { title: '登录' },
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/app',
    meta: {
      title: 'Root',
    },
  },
  // ...accessRoutes,
];

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: BlankLayout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('/@/views/redirect/index'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
  {
    path: '/404',
    component: () => import('/@/views/404.vue'),
  },
];

export default [...constantRoutes, ...accessRoutes, ...publicRoutes];