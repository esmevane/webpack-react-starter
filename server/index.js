/* eslint no-undef: "off" */

const createApp = require("./createApp")
const createDev = require("./createDev")
const port = process.env.NODE_PORT || 9002

const app = createApp(port)
const dev = createDev(port)

app.listen()
dev.listen()
