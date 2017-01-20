import React, { Component } from "react"
import { connect } from "react-redux"
import ActiveToggle from "components/ActiveToggle"
import styles from "./styles.module.css"

class IsActive extends Component {
  render() {
    const { active } = this.props

    return(
      <div className={ styles.container }>
        Redux active state value is { String(active) }.
        <ActiveToggle />
      </div>
    )
  }
}

const mapStateToProps = ({ active }) => ({ active })

export default connect(mapStateToProps)(IsActive)
