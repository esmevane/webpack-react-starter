import React, { Component } from "react"
import View from "./view"
import update from "./update"

export default class ConnectApp extends Component {
  constructor(props) {
    super(props)

    this.state = { total: 0 }
  }

  render() {
    const onAction = (message) => {
      return () => {
        const action = { message, model: this.state }
        const nextState = update(action)

        this.setState(nextState)
      }
    }

    return React.Children.only(
      <View { ...this.state } onClick={ onAction } />
    )
  }
}
