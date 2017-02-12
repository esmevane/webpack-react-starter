import React, { Component } from "react"
import styles from "./styles.module.css"

export default class Header extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <div className={ styles.title }>
          <i className="fa fa-circle-o fa-5x" />
          <i className="fa fa-circle fa" />
          <span className={ styles.headline }>
            imaginary dashboard
          </span>
        </div>
      </div>
    )
  }
}
