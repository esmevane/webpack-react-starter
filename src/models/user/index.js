// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require("sequelize")

const email    = { type: Sequelize.STRING, allowNull: false, unique: true }
const password = { type: Sequelize.STRING, allowNull: false }
const schema   = { email, password }
const options  = { freezeTableName: true }

module.exports = function() {
  const app       = this
  const sequelize = app.get("sequelize")
  const User      = sequelize.define("users", schema, options)

  return User
}
