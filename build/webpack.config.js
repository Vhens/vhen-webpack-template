/*
 * @Author: Vhen
 * @Date: 2020-10-09 15:05:04
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-09 17:35:01
 * @Description:
 */
const BasePluginConfig = require('./base.plugin.config')
const EntryConfig = require('./entry.config')
const ModuleConfig = require('./module.config')
const ServerConfig = require('./server.config')
const OutputConfig= require('./output.config')
const ResolveConfig= require('./resolve.config')


module.exports = {
  mode: 'development',
  entry: EntryConfig,
  output: OutputConfig,
  module: ModuleConfig,
  resolve: ResolveConfig,
  devServer: ServerConfig,
  plugins: BasePluginConfig,
}
