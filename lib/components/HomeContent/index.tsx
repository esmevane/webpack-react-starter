import * as React from "react";
import { Component } from "react";
import Counter from "components/Counter";

const styles: any = require("./styles.module.css");

export default class HomeContent extends Component<{}, {}> {

  render() {
    return(
      <div className={ styles.container }>
        I'm the home page, wooooo. Here's a totally self-contained Counter app:
        <Counter />
      </div>
    );
  }

}
