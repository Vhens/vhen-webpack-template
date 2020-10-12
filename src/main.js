/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:43:25
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-12 10:20:37
 * @Description: 
 */
import App from 'App.vue'
import { router } from 'router'
Vue.use(VueRouter)
new Vue({
    el:'#app',
    router,
    render: h => h(App)
})