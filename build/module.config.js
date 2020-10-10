/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:04:16
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-10 13:23:28
 * @Description: 处理项目中的不同类型的模块。
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //css分离
module.exports = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(sa|sc|le|c)ss$/,
      use: [
        'vue-style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true,
          },
        },
        'css-loader',
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              config:  path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
      },
    },
  ],
}
