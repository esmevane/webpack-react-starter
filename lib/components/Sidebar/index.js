import React from "react"
import styles from "./styles.module.css"
import * as paths from "paths"
import { Link } from "react-router"

const Sidebar = () =>
  <nav className={ styles.container }>
    <Link to={ paths.home() }>Home Content</Link>
    <Link to={ paths.newContent() }>New Content</Link>
  </nav>

export default Sidebar
