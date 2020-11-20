import Vue from 'vue';
import VueRouter from 'vue-router';
import { baseRoutes } from './baseRoutes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: baseRoutes
})

export default router;
