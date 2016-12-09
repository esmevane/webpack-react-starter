/* eslint no-undef: "off" */

const DevServer = require("webpack-dev-server")
const proxy = require("proxy-middleware")
const webpack = require("webpack")
const url = require("url")
const path = require("path")
const express = require("express")
const config = require("./webpack.config")

const devHost = `http://localhost:${config.meta.port}/assets`
const appPath = path.resolve(path.join(__dirname, "public"))

const devConfig = {
  cached: false,
  cachedAssets: false,
  contentBase: path.resolve(appPath),
  historyApiFallback: true,
  hot: true,
  inline: true,
  publicPath: config.output.publicPath,
  stats: { colors: true, chunkModules: false }
}

if (process.env.NODE_ENV !== "production") {
  const compiler = webpack(config)
  const devServer = new DevServer(compiler, devConfig)

  const app = express()
    .use("/assets", proxy(url.parse(devHost)))
    .use("/images", express.static(`${appPath}/images`))
    .use("/fonts", express.static(`${appPath}/fonts`))
    .use("*", (request, response) => {
      response.sendFile(`${appPath}/index.html`)
    })

  app.listen(config.meta.port - 1)
  devServer.listen(config.meta.port, "localhost", () => {})
}
