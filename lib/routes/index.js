import "styles.css"
import "font-awesome/css/font-awesome.css"
import React from "react"
import { Router, browserHistory } from "react-router"
import * as paths from "paths"

const routes =
  <Router history={ browserHistory } routes={ paths.homePage.toRoute() } />

export { routes }
