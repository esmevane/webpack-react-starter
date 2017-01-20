import React from "react"
import { Provider } from "react-redux"
import { Router, browserHistory } from "react-router"
import * as pages from "pages"
import store from "store"

const routes =
  <Provider store={ store }>
    <Router
      history={ browserHistory }
      routes={ pages.homePage.toRoute() }
    />
  </Provider>

export { routes }
