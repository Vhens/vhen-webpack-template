/*
 * @Author: Vhen
 * @Date: 2020-10-10 13:54:28
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-12 10:37:21
 * @Description: 路由
 */

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
// console.log(ELEMENT.Message.success('sdasdas'));
export const router = new VueRouter({
  routes,
})