import React, { Component } from "react"
import Counter from "components/Counter"
import Login from "components/Login"
import Signup from "components/Signup"
import styles from "./styles.module.css"

export default class HomeContent extends Component {

  render() {
    return(
      <div className={ styles.container }>
        <Login />
        <Signup />
        I'm the home page, wooooo. Here's a totally self-contained Counter app:
        <Counter />
      </div>
    )
  }

}
