/* eslint no-console: "off" */

const createApp = require("./app")
const app = createApp()
const port = app.get("port")
const server = app.listen(port)

server.on("listening", () =>
  console.log(`Feathers application started on ${app.get("host")}:${port}`)
)
