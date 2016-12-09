import * as React from "react";
import { Component } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import HomeContent from "components/HomeContent";

const styles: any = require("./styles.module.css");

interface AppContainerProps {
  header: Component<{}, {}>;
  sidebar: Component<{}, {}>;
  content: Component<{}, {}>;
}

export default class AppContainer extends Component<AppContainerProps, {}> {
  render() {
    const { header, sidebar, content } = this.props;

    return(
      <div className={ styles.container }>
        <header className={ styles.header }>
          { header || <Header /> }
        </header>
        <aside className={ styles.sidebar }>
          { sidebar || <Sidebar /> }
        </aside>
        <section className={ styles.content }>
          { content || <HomeContent /> }
        </section>
      </div>
    );
  }

}
