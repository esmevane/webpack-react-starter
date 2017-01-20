import React, { Component } from "react"
import { connect } from "react-redux"

import { signup } from "actions"
import CredentialsForm from "components/CredentialsForm"

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "" }
  }

  render() {
    const { token } = this.props

    const handleSubmit = event => {
      event.preventDefault()

      const { email, password } = this.state

      this.props.signup({ email, password })
    }

    const handleEmailChange = event =>
      this.setState({ email: String(event.target.value) })

    const handlePasswordChange = event =>
      this.setState({ password: String(event.target.value) })

    if (token) {
      return null
    }

    return(
      <CredentialsForm
        onSubmit={ handleSubmit }
        onEmailChange={ handleEmailChange }
        onPasswordChange={ handlePasswordChange }
      >
        Sign up
      </CredentialsForm>
    )
  }
}

const mapStateToProps = ({ token }) => ({ token })
const mapDispatchToProps = { signup }

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
