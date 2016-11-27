import React from "react"
import styles from "./styles.module.css"
import { paths } from "routes/definitions"
import { Link } from "react-router"

const Sidebar = () =>
  <nav className={ styles.container }>
    <Link to={ paths.root() }>Home Content</Link>
    <Link to={ paths.new() }>New Content</Link>
  </nav>

export default Sidebar
