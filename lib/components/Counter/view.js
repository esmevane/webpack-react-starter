import React, { Component } from "react"
import { Increment, Decrement } from "./messages"
import styles from "./styles.module.css"

export default class View extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <button onClick={ this.props.onClick(Increment) }>
          <i className="fa fa-plus" />
        </button>
        { this.props.total }
        <button onClick={ this.props.onClick(Decrement) }>
          <i className="fa fa-minus" />
        </button>
      </div>
    )
  }
}
