const Sequelize = require("sequelize")
const createApp = require("../../src/app")

const app = createApp()
const models = app.get("models")
const sequelize = app.get("sequelize")

module.exports = { Sequelize, sequelize, ...models }
