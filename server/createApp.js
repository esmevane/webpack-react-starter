/* eslint no-undef: "off" */

const proxy = require("proxy-middleware")
const url = require("url")
const path = require("path")
const express = require("express")

const createApp = (config) => {
  const port = config.meta.port
  const appPath = path.resolve(path.join(__dirname, "..", "public"))
  const devHost = `http://localhost:${port}/assets`

  const app = express()
    .use("/assets", proxy(url.parse(devHost)))
    .use("/images", express.static(`${appPath}/images`))
    .use("/fonts", express.static(`${appPath}/fonts`))
    .use("*", (request, response) => {
      response.sendFile(`${appPath}/index.html`)
    })

  const listen = () => app.listen(port - 1)

  return { listen, path: appPath }
}

module.exports = createApp
