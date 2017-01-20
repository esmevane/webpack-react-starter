/* eslint no-undef: "off" */

const feathers = require("feathers")
const url = require("url")
const path = require("path")
const favicon = require("serve-favicon")
const proxy = require("proxy-middleware")
const createApi = require("./createApi")

const createApp = (port) => {
  const appPath = path.resolve(path.join(__dirname, "..", "public"))
  const devHost = `http://localhost:${port}/assets`

  const listen = () => {
    const api = createApi()
    const app = feathers()
    const index = (request, response) =>
      response.sendFile(`${appPath}/index.html`)

    app
      .use(favicon(path.join(api.get("public"), "favicon.ico")))
      .use("/api", api)
      .use("/assets", proxy(url.parse(devHost)))
      .use("/*", index)

    app.listen(port - 1)
  }

  return { listen, path: appPath }
}

module.exports = createApp
