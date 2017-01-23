import React, { Component } from "react"
import styles from "./styles.module.css"

export default class Input extends Component {
  render() {
    const { props } = this
    const { children, ...rest } = props

    return(
      <input className={ styles.container } { ...rest }>
        { children }
      </input>
    )
  }
}
