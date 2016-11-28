import React from "react"
import styles from "./styles.module.css"
import * as pages from "pages"
import { Link } from "react-router"

const Sidebar = () =>
  <nav className={ styles.container }>
    <Link to={ pages.homePage.path() }>Home Content</Link>
    <Link to={ pages.newPage.path() }>New Content</Link>
  </nav>

export default Sidebar
