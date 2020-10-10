/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:43:25
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 14:06:52
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router'

Vue.use(VueRouter)
new Vue({
    el:'#app',
    router,
    render: h => h(App)
})