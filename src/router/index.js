/*
 * @Author: Vhen
 * @Date: 2020-10-10 13:54:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 15:17:14
 * @Description: 路由
 */
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: (_) => import(/* webpackChunkName: "home" */ 'views/home'),
  }
]

export const router = new VueRouter({
  routes,
})