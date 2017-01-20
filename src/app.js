/* eslint no-undef: "off" */

const path = require("path")
const compress = require("compression")
const cors = require("cors")
const feathers = require("feathers")
const configuration = require("feathers-configuration")
const authentication = require("feathers-authentication")
const hooks = require("feathers-hooks")
const rest = require("feathers-rest")
const bodyParser = require("body-parser")
const socketio = require("feathers-socketio")
const middleware = require("./middleware")
const models = require("./models")
const services = require("./services")

const createApp = () => {
  const app = feathers()

  app.configure(configuration(path.join(__dirname, "..")))

  const auth = app.get("auth")

  app.use(compress())
    .options("*", cors())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .configure(hooks())
    .configure(rest())
    .configure(socketio())
    .configure(authentication(auth))
    .configure(models)
    .configure(services)
    .configure(middleware)

  return app
}

module.exports = createApp
