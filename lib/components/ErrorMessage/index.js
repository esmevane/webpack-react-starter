import React, { Component } from "react"
import { connect } from "react-redux"
import styles from "./styles.module.css"

class ErrorMessage extends Component {
  render() {
    const { message } = this.props

    if (!message) {
      return null
    }

    return(
      <div className={ styles.container }>
        { message }
      </div>
    )
  }
}

const mapStateToProps = ({ errors }) => ({ message: errors.message })

export default connect(mapStateToProps)(ErrorMessage)
