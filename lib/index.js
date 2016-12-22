import "babel-polyfill"
import "styles"
import "font-awesome/css/font-awesome"

import { render } from "react-dom"
import { routes } from "routes"

const element = document.getElementById("root")

render(routes, element)
