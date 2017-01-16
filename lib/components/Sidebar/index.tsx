import * as React from "react";
import { Link } from "react-router";
import * as pages from "pages";

const styles: any = require("./styles.module.css");

const Sidebar = () =>
  <nav className={ styles.container }>
    <Link to={ pages.homePage.path() }>Home Content</Link>
    <Link to={ pages.newPage.path() }>New Content</Link>
  </nav>;

export default Sidebar;
