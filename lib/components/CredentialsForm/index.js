import React, { Component } from "react"
import styles from "./styles.module.css"

export default class CredentialsForm extends Component {
  render() {
    const {
      onSubmit,
      onEmailChange,
      onPasswordChange,
      children
    } = this.props

    return(
      <div className={ styles.container }>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            onChange={onEmailChange}
            placeholder="Email address" />

          <input
            type="password"
            onChange={onPasswordChange}
            placeholder="Password" />

          <button type="submit">
            { children }
          </button>
        </form>
      </div>
    )
  }
}
