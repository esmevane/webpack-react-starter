import * as React from "react";
import { Component } from "react";
import IsActive from "components/IsActive";

const styles: any = require("./styles.module.css");

export default class NewContent extends Component<{}, {}> {

  render() {
    return(
      <div className={ styles.container }>
        I'm the other page!  Woo.  Here's a Redux sanity check:
        <IsActive />
      </div>
    );
  }

}
