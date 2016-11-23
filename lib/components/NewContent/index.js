import React from "react"
import styles from "./styles.module.css"

export default class NewContent extends React.Component {

  render() {
    return(
      <div className={ styles.container }>
        I'm the other page!  Woo.
      </div>
    )
  }

}
