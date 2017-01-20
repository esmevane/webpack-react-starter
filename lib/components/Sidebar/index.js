import React, { Component } from "react"
import { Link } from "react-router"
import * as pages from "pages"
import styles from "./styles.module.css"

export default class Sidebar extends Component {
  render() {
    return(
      <nav className={ styles.container }>
        <Link className={ styles.link } to={ pages.homePage.path() }>
          Home
        </Link>
        <Link className={ styles.link } to={ pages.newPage.path() }>
          New
        </Link>
      </nav>
    )
  }
}
