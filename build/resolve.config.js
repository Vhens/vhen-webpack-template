/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:02:12
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 15:14:08
 * @Description: 
 */
const path = require('path')
module.exports = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname,'../src'),
    'main': path.resolve(__dirname, '../src/main.js'),
    'views': path.resolve(__dirname, '../src/views')
  },
  extensions: ['.js', '.vue']
}