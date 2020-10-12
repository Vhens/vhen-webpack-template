/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:02:12
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 17:25:43
 * @Description:
 */
const path = require('path')
module.exports = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '../src'),
    main: path.resolve(__dirname, '../src/main.js'),
    views: path.resolve(__dirname, '../src/views'),
  },
  modules: [
    // 优化模块查找路径
    path.resolve('src'),
    path.resolve('node_modules'), // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
  ],
  extensions: ['.js', '.vue'],
}
