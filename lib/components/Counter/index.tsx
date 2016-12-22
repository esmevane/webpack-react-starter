import * as React from "react";
import { Component } from "react";
import View from "./view";
import update from "./update";
import { Action, Message, Model } from "./types.d";

export default class ConnectApp extends Component<{}, Model> {
  constructor(props) {
    super(props);

    this.state = { total: 0 };
  }

  render() {
    const onAction = (message: Message): Function => {
      return () => {
        const action: Action = { message, model: this.state };
        const nextState: Model = update(action);

        this.setState(nextState);
      };
    };

    return React.Children.only(
      <View { ...this.state } onClick={ onAction } />
    );
  }
}
