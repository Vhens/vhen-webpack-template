/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:04:16
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-12 11:21:55
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
      loader: 'babel-loader?cacheDirectory', // 缓存loader执行结果
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
      loader: 'url-loader',
      options: {
        name: '[name].[ext]?[hash]',
      },
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75
            }
          }
        },
      ],
    }
  ],
}
