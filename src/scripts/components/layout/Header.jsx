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
            <li>
              <img className="linea linea-izq" src={linea} alt="" />
            </li>
            <li>
              <img className="logo" src={logo} alt="" />
            </li>
            <li>
              <img className="linea linea-dch" src={linea} alt="" />
            </li>
          </ul>
        </div>
        <LangSelector {...this.props} />
      </div>
    );
  }
}
