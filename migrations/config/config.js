/* eslint no-undef: "off" */

const fs = require("fs-extra")
const path = require("path")
const createApp = require("../../src/app")

const app = createApp()
const env = process.env.NODE_ENV || "development"
const sqlite = app.get("sqlite")

fs.ensureDirSync(path.dirname(sqlite))

module.exports = {
  [env]: {
    dialect: "sqlite",
    storage: sqlite,
    migrationStorageTableName: "_migrations"
  }
}
