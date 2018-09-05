import React, { Component } from "react";
import Header from "./Header";
import NavMenu from "./NavMenu";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header {...this.props} />
        <NavMenu />
        <Body />
        <Footer />
      </div>
    );
  }
}
