/* eslint no-undef: "off" */

var webpack = require("webpack")
var path = require("path")
var port = process.env.NODE_PORT || 9002
var plugins = []
var entry = []

var publicPath
var cssNamePattern

if (process.env.NODE_ENV !== "production") {
  entry.push(`webpack-dev-server/client?http://localhost:${port}`)
  entry.push("webpack/hot/only-dev-server")

  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new webpack.NamedModulesPlugin())

  publicPath = `http://localhost:${port}/assets/`
  cssNamePattern = "localIdentName=[path][name]-[local]"
} else {
  publicPath = "assets/"
  cssNamePattern = "localIdentName=[hash:base64:5]"
}

entry.push("./lib/index.js")

module.exports = {
  meta: { port },

  plugins,
  entry,

  postcss: [
    require("postcss-modules-values"),
    require("postcss-animation")({}),
    require("autoprefixer")({ browsers: [ "last 2 versions" ] }),
  ],

  devtool: "cheap-module-eval-source-map",

  output: {
    path: path.resolve(path.join(__dirname, "public", "assets")),
    filename: "index.js",
    publicPath
  },

  resolve: {
    modulesDirectories: [
      "node_modules",
      path.resolve(__dirname, "lib")
    ],
    extensions: [ "", ".js", ".json", ".css" ]
  },

  module: {
    loaders: [
      {
        test: /\.(css)$/,
        exclude: /\.module\./,
        loader: "style!css!postcss"
      },
      {
        test: /\.module\.(css)$/,
        loader: `style!css?modules&${cssNamePattern}!postcss`
      },
      {
        test: /\.(js)$/,
        exclude: "node_modules",
        loader: "babel"
      },
      {
        test: /\.html$/,
        exclude: "node_modules",
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      }
    ]
  }
}
