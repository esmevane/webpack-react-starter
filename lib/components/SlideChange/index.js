import React, { Component } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styles from "./styles.module.css"

export default class SlideChange extends Component {
  render() {
    const { children } = this.props
    return(
      <ReactCSSTransitionGroup transitionName={ styles }
                               transitionAppearTimeout={ 1000 }
                               transitionEnterTimeout={ 1000 }
                               transitionLeaveTimeout={ 1000 }
                               { ...(this.props) }>
        { children }
      </ReactCSSTransitionGroup>
    )
  }
}
