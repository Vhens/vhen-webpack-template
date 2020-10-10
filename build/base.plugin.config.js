/*
 * @Author: Vhen
 * @Date: 2020-10-09 14:54:55
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 10:46:50
 * @Description: 基础插件
 */

const path = require('path');
const webpack = require('webpack');       //webpack打包工具
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') //构建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 清理构建目录下的文件
const VueLoaderPlugin=require('vue-loader/lib/plugin') // vue-loader 编译vue文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离

module.exports = [
  new CleanWebpackPlugin(),
  // 构建html
  new HtmlWebpackPlugin({
    // favicon: 'favicon.ico',
    filename: 'index.html',
    template: 'index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    },
  }),
  new webpack.HotModuleReplacementPlugin(),  //热模块替换开启
  //vue-loader插件开启
  new VueLoaderPlugin(),    
  // new   HtmlWebpackTagsPlugin({
  //   links: [
  //     // 'style-1.css',
  //   ],
  //   scripts: [
  //     { path: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js' },
  //   ]
  // })
  new MiniCssExtractPlugin({
    // 类似 webpackOptions.output里面的配置 可以忽略
    filename: 'css/[name].css',
    //chunkFilename: 'css/[id].css',
  })
]