import React, { Component } from "react"
import { connect } from "react-redux"
import { logout, login } from "actions"
import CredentialsForm from "components/CredentialsForm"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "" }
  }

  render() {
    const { token } = this.props

    const handleSubmit = event => {
      event.preventDefault()

      const { email, password } = this.state

      this.props.login({ email, password })
    }

    const handleEmailChange = event =>
      this.setState({ email: String(event.target.value) })

    const handlePasswordChange = event =>
      this.setState({ password: String(event.target.value) })

    if (token) {
      return <button onClick={ this.props.logout }>Log out</button>
    }

    return(
      <CredentialsForm
        onSubmit={ handleSubmit }
        onEmailChange={ handleEmailChange }
        onPasswordChange={ handlePasswordChange }
      >
        Log in
      </CredentialsForm>
    )
  }
}

const mapStateToProps = ({ token }) => ({ token })
const mapDispatchToProps = { logout, login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
