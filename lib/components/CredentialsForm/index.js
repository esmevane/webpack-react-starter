import React, { Component } from "react"
import Button from "components/Button"
import Input from "components/Input"
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
          <Input
            type="email"
            onChange={onEmailChange}
            placeholder="Email address" />

          <Input
            type="password"
            onChange={onPasswordChange}
            placeholder="Password" />

          <Button type="submit">
            { children }
          </Button>
        </form>
      </div>
    )
  }
}
