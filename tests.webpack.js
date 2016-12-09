const context = require.context("./lib", true, /\.spec\.ts/)

context.keys().forEach(context)
