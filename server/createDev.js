const DevServer = require("webpack-dev-server")
const path = require("path")
const webpack = require("webpack")
const createApp = require("./createApp")

const createDev = (config) => {
  const app = createApp(config)
  const compiler = webpack(config)

  const devConfig = {
    cached: false,
    cachedAssets: false,
    contentBase: path.resolve(app.path),
    historyApiFallback: true,
    hot: true,
    inline: true,
    publicPath: config.output.publicPath,
    stats: { colors: true, chunkModules: false }
  }

  const devServer = new DevServer(compiler, devConfig)

  const listen = () =>
    devServer.listen(config.meta.port, "localhost", () => {})

  return { listen }
}

module.exports = createDev
