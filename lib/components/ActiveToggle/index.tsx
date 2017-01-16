import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { toggle } from "./actions";

const styles: any = require("./styles.module.css");

const IsActive = ({ toggle }) =>
  <div className={ styles.container }>
    <button onClick={ toggle }>
      Toggle it
    </button>
  </div>;

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = { toggle };

export default connect(mapStateToProps, mapDispatchToProps)(IsActive);
