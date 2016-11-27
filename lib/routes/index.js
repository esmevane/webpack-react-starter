import "styles.css"
import "font-awesome/css/font-awesome.css"
import React from "react"
import { Router, browserHistory } from "react-router"
// import { Router, IndexRoute, Route, browserHistory } from "react-router"
// import * as paths from "paths"

import { RouteMap, route } from "routes/mapper"

const definitions = function* () {
  const normalChrome = {
    header: "components/Header",
    sidebar: "components/Sidebar",
    content: "components/HomeContent"
  }

  const homePage =
    route("/")
      .to("components/AppContainer")
      .withIndex(normalChrome)

  const newPage =
    route("new")
      .to({ ...normalChrome, content: "components/NewContent" })

  yield homePage.withRoutes(function* () { yield newPage })
}

const mapper = new RouteMap(definitions)

// const getAppContainer = (location, callback) =>
//   require.ensure([], () =>
//     callback(null, require("components/AppContainer").default)
//   )
//
// const getHomeContent = (location, callback) =>
//   require.ensure([], () =>
//     callback(null, {
//       header: require("components/Header").default,
//       sidebar: require("components/Sidebar").default,
//       content: require("components/HomeContent").default
//     })
//   )
//
// const getNextPageContent = (location, callback) =>
//   require.ensure([], () =>
//     callback(null, {
//       header: require("components/Header").default,
//       sidebar: require("components/Sidebar").default,
//       content: require("components/NewContent").default
//     })
//   )
//
// const routes =
//   <Router history={ browserHistory }>
//     <Route path={ paths.home() } getComponent={ getAppContainer } >
//       <IndexRoute getComponents={ getHomeContent } />
//       <Route path={ paths.newContent() } getComponents={ getNextPageContent } />
//     </Route>
//   </Router>

const routes =
  <Router history={ browserHistory } routes={ mapper.toAsyncRoutes(require) } />

export { routes, mapper }
