/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:02:12
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-12 11:00:34
 * @Description:
 */
const path = require('path')
module.exports = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
  },
  modules: [
    // 优化模块查找路径
    path.resolve('src'),
    path.resolve('public'),
    path.resolve('node_modules'), // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
  ],
  extensions: ['.js', '.vue'],
}
