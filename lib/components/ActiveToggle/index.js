import React, { Component } from "react"
import { connect } from "react-redux"
import { toggle } from "./actions"
import Button from "components/Button"
import styles from "./styles.module.css"

class ActiveToggle extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <Button onClick={ this.props.toggle }>
          Toggle it
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ }) /* eslint no-unused-vars: "off" */
const mapDispatchToProps = { toggle }
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(ActiveToggle)
