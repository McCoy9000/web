import React, { Component } from "react";
import LangSelector from "../i18n/LangSelector";
import linea from "../../../resources/images/header/linea.png";
import logo from "../../../resources/images/header/logo.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="ribbon">
          <ul>
            <li className="linea linea-izq">
              <img src={linea} alt="" />
            </li>
            <li className="logo">
              <img src={logo} alt="" />
            </li>
            <li className="linea linea-dch">
              <img src={linea} alt="" />
            </li>
          </ul>
          <LangSelector {...this.props} />
        </div>
      </div>
    );
  }
}
