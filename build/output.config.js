/*
 * @Author: Vhen
 * @Date: 2020-10-09 16:06:22
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-12 09:27:57
 * @Description:  出口
 */
const path = require('path')
module.exports = {
  filename: 'js/[name][hash:7].js',  //文件名
  path: path.resolve(__dirname, '../dist'), //路径          //title
  publicPath: '',  //srcript 引入路径
}
