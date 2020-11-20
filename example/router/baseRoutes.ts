import { RouteConfig } from 'vue-router';

export const baseRoutes: RouteConfig[] = [
  {
    path: '/Button',
    name: 'Button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/Input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/Toast',
    name: 'Toast',
    component: () => import('../views/Toast.vue')
  }
];
