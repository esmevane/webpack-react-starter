import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { toggle } from "actions";

const styles: any = require("./styles.module.css");

const IsActive = ({ toggle }) =>
  <button onClick={ toggle } className={ styles.container }>
    Toggle it
  </button>;

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = { toggle };

export default connect(mapStateToProps, mapDispatchToProps)(IsActive);
