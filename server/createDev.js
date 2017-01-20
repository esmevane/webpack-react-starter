const DevServer = require("webpack-dev-server")
const path = require("path")
const webpack = require("webpack")
const createApp = require("./createApp")
const config = require("../webpack.config")

const createDev = (port) => {
  const app = createApp(port)
  const compiler = webpack(config)

  const devConfig = {
    contentBase: path.resolve(app.path),
    historyApiFallback: true,
    hot: true,
    inline: true,
    publicPath: config.output.publicPath,
    stats: { colors: true, chunkModules: false }
  }

  const listen = () => {
    const devServer = new DevServer(compiler, devConfig)

    devServer.listen(port, "localhost", () => {})
  }

  return { listen }
}

module.exports = createDev
