import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import ActiveToggle from "components/ActiveToggle";

const styles: any = require("./styles.module.css");

const IsActive = ({ active }) =>
  <div className={ styles.container }>
    Redux active!  Right now the active state value is { String(active) }.
    <ActiveToggle />
  </div>;

const mapStateToProps = ({ active }) => ({ active });

export default connect(mapStateToProps)(IsActive);
