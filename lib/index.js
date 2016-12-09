require("styles")
require("font-awesome/css/font-awesome")

const { render } = require("react-dom")
const { routes } = require("routes")
const element = document.getElementById("root")

render(routes, element)
