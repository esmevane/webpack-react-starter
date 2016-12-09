const webpackConfig = require("./webpack.config")

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: [ "mocha", "chai" ],
    plugins: [
      "karma-mocha",
      "karma-chai",
      "karma-webpack",
      "karma-phantomjs-launcher",
      "karma-spec-reporter",
      "karma-growl-reporter",
      "karma-sourcemap-loader"
    ],
    files: [ "tests.webpack.js" ],
    webpack: webpackConfig,
    webpackServer: { noInfo: true },
    exclude: [ ],
    preprocessors: {
      "tests.webpack.js": [ "webpack", "sourcemap" ]
    },
    reporters: [ "spec", "growl" ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ "PhantomJS" ],
    singleRun: false,
    concurrency: Infinity
  })
}
