import "styles.css"
import "font-awesome/css/font-awesome.css"
import React from "react"
import { Router, IndexRoute, Route, browserHistory } from "react-router"
import * as paths from "paths"

const getAppContainer = (location, callback) =>
  require.ensure([], () =>
    callback(null, require("components/AppContainer").default)
  )

const getHomeContent = (location, callback) =>
  require.ensure([], () =>
    callback(null, {
      header: require("components/Header").default,
      sidebar: require("components/Sidebar").default,
      content: require("components/HomeContent").default
    })
  )

const getNextPageContent = (location, callback) =>
  require.ensure([], () =>
    callback(null, {
      header: require("components/Header").default,
      sidebar: require("components/Sidebar").default,
      content: require("components/NewContent").default
    })
  )

const routes =
  <Router history={ browserHistory }>
    <Route path={ paths.home() } getComponent={ getAppContainer } >
      <IndexRoute getComponents={ getHomeContent } />
      <Route path={ paths.newContent() } getComponents={ getNextPageContent } />
    </Route>
  </Router>

export { routes }
