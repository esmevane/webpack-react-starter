import React, { Component } from "react"
import styles from "./styles.module.css"

export default class Button extends Component {
  render() {
    const { props } = this
    const { children, ...rest } = props

    return(
      <button className={ styles.container } { ...rest }>
        { children }
      </button>
    )
  }
}
