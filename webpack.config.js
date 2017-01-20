/* eslint no-undef: "off" */

var webpack = require("webpack")
var path = require("path")
var meta = { port: 9002 }
var plugins = []
var entry = []

var publicPath
var cssNamePattern

if (process.env.NODE_ENV !== "production") {
  entry.push(`webpack-dev-server/client?http://localhost:${meta.port}`)
  entry.push("webpack/hot/only-dev-server")

  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new webpack.NamedModulesPlugin())

  publicPath = `http://localhost:${meta.port}/assets/`
  cssNamePattern = "[path][name]-[local]"
} else {
  publicPath = "assets/"
  cssNamePattern = "[hash:base64:5]"
}

entry.push("./lib/index.js")

module.exports = {
  plugins,
  entry,

  devtool: "cheap-module-eval-source-map",

  output: {
    path: path.resolve(path.join(__dirname, "public", "assets")),
    filename: "index.js",
    publicPath
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "lib")
    ],
    extensions: [ ".js", ".json", ".css" ]
  },

  module: {
    rules: [
      {
        test: /\.(css)$/,
        exclude: /\.module\./,
        use: [ "style-loader", "css-loader", "postcss-loader" ]
      },
      {
        test: /\.module\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: cssNamePattern
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(js)$/,
        exclude: "node_modules",
        use: [ "babel-loader" ]
      },
      {
        test: /\.html$/,
        exclude: "node_modules",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              minetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [ "file-loader" ]
      }
    ]
  }
}
