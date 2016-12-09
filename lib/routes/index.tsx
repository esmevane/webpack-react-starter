import * as React from "react";
import { Router, browserHistory } from "react-router";
import * as pages from "pages";

const routes =
  <Router
    history={ browserHistory }
    routes={ pages.homePage.toRoute() }
  />;

export { routes }