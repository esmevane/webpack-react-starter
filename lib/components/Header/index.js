import React, { Component } from "react"
import styles from "./styles.module.css"

export default class Header extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <div className={ styles.title }>
          <i className="fa fa-bookmark fa-5x" />
        </div>
      </div>
    )
  }
}
