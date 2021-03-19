const { midwayPlugin } = require('ssr-plugin-midway')
const { reactPlugin } = require('ssr-plugin-react')
//客户端插件和服务端插件
// build下的文件为打包后的文件
// dist下的文件为ts生成的js文件
module.exports = {
  serverPlugin: midwayPlugin(),
  clientPlugin: reactPlugin()
}
