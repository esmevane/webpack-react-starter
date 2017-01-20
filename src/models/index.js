const path = require("path")
const fs = require("fs-extra")
const Sequelize = require("sequelize")

const models = ["./user"]

module.exports = function() {
  const app = this
  const sqlite = app.get("sqlite")

  // Ensure that we've got a valid sqlite file configured which
  // we can use.
  //
  fs.ensureDirSync(path.dirname(sqlite))

  const options = {
    dialect: "sqlite",
    storage: sqlite,
    logging: false
  }

  const sequelize = new Sequelize("feathers", null, null, options)

  // Establish an instance of our connection on the global application.
  //
  app.set("sequelize", sequelize)

  // Now we want to bootstrap each of our models.
  //
  models.forEach(model => {
    app.configure(require(model))
  })

  app.set("models", sequelize.models)

  Object.keys(sequelize.models).forEach(model => {
    if ("associate" in sequelize.models[model]) {
      sequelize.models[model].associate()
    }
  })

  sequelize.sync()
}
