import * as React from "react";
import { Component } from "react";
import { Increment, Decrement } from "./messages";
import { Props } from "./types.d";

const styles: any = require("./styles.module.css");

export default class View extends Component<Props, {}> {
  render() {
    return(
      <div className={ styles.container }>
        <button onClick={ this.props.onClick(Increment) }>
          <i className="fa fa-plus" />
        </button>
        { this.props.total }
        <button onClick={ this.props.onClick(Decrement) }>
          <i className="fa fa-minus" />
        </button>
      </div>
    );
  }
}
