import type { RouteRecordRaw } from 'vue-router';
import BasicLayout from '/@/layouts/index.vue';
export const accessRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'app',
    redirect: '/app/component1',
    component: BasicLayout,
    meta: {title: '管理平台'},
    children: [
      {
        path: '/app/component1',
        component: () => import('/@/views/component1.vue'),
        name: 'component1',
        meta: {title: '组件1'}
      },
      {
        path: '/app/component2',
        component: () => import('/@/views/component2.vue'),
        name: 'component2',
        meta: {title: '组件2'}
      }
    ]
  }
]