// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/login/login.vue'),
  },
];

export default commonRoutes;
