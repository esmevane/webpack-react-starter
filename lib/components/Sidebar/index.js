import React from "react"
import styles from "./styles.module.css"
import * as paths from "paths"
import { Link } from "react-router"

const Sidebar = () =>
  <nav className={ styles.container }>
    <Link to={ paths.homePage.path() }>Home Content</Link>
    <Link to={ paths.newPage.path() }>New Content</Link>
  </nav>

export default Sidebar
