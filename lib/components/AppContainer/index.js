import React from "react"
import styles from "./styles.module.css"

export default class AppContainer extends React.Component {

  render() {
    const { header, sidebar, content } = this.props

    return(
      <div className={ styles.container }>
        <header className={ styles.header }>
          { header }
        </header>
        <aside className={ styles.sidebar }>
          { sidebar }
        </aside>
        <section className={ styles.content }>
          { content }
        </section>
      </div>
    )
  }

}
