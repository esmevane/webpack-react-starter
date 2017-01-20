import React, { Component } from "react"
import Login from "components/Login"
import ErrorMessage from "components/ErrorMessage"
import Signup from "components/Signup"
import styles from "./styles.module.css"

export default class Header extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <h2><i className="fa fa-search" /> Dashboard </h2>
        <ErrorMessage />
        <Login />
        <Signup />
      </div>
    )
  }
}
