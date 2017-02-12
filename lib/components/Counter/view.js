import React, { Component } from "react"
import { Increment, Decrement } from "./messages"
import Button from "components/Button"
import styles from "./styles.module.css"

export default class View extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <div className={ styles.title }>
          Counter App
        </div>
        <div className={ styles.content }>
          <Button onClick={ this.props.onClick(Increment) }>
            <i className="fa fa-plus" />
          </Button>
        </div>
        <div className={ styles.content }>
          { this.props.total }
        </div>
        <div className={ styles.content }>
          <Button onClick={ this.props.onClick(Decrement) }>
            <i className="fa fa-minus" />
          </Button>
        </div>
      </div>
    )
  }
}
