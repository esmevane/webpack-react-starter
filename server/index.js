/* eslint no-undef: "off" */

const config = require("../webpack.config")

const createApp = require("./createApp")
const createDev = require("./createDev")

const app = createApp(config)
const dev = createDev(config)

app.listen()
dev.listen()
