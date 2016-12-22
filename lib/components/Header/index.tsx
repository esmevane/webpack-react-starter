import * as React from "react";
import IsActive from "components/IsActive";

const styles: any = require("./styles.module.css");

const Header = () =>
  <div className={ styles.container }>
    <h2>A basic webpack + react kit with code splitting</h2>
    <IsActive />
  </div>;

export default Header;
