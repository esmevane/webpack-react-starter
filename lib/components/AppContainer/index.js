import React, { Component } from "react"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import ErrorMessage from "components/ErrorMessage"
import HomeContent from "components/HomeContent"
import styles from "./styles.module.css"

export default class AppContainer extends Component {
  render() {
    const { header, sidebar, content } = this.props

    return(
      <div className={ styles.container }>
        <header className={ styles.header }>
          { header || <Header /> }
        </header>
        <aside className={ styles.sidebar }>
          { sidebar || <Sidebar /> }
        </aside>
        <section className={ styles.content }>
          <section className={ styles.notices }>
            <ErrorMessage />
          </section>
          { content || <HomeContent /> }
        </section>
      </div>
    )
  }
}
