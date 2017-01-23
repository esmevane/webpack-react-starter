import React, { Component } from "react"
import { connect } from "react-redux"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import styles from "./styles.module.css"

class ErrorMessage extends Component {
  render() {
    const { message } = this.props
    const messages = [message].filter(message => message)

    return(
      <div className={ styles.container }>
        <ReactCSSTransitionGroup transitionName={ styles }
                         transitionAppearTimeout={ 1000 }
                         transitionEnterTimeout={ 1000 }
                         transitionLeaveTimeout={ 1000 }
                         { ...(this.props) }>
              {
                messages.map((message, index) => (
                  <div key={ index } className={ styles.message }>
                    <i className='fa fa-warning fa-fw' />
                    { message }
                  </div>
                ))
              }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = ({ errors }) => ({ message: errors.message })

export default connect(mapStateToProps)(ErrorMessage)
