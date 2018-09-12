import React, { Component } from "react";
import LangSelectorButton from "./LangSelectorButton";

export default class LangSelector extends Component {
  render() {
    const { languages } = this.props;

    const buttons = languages.map(language => (
      <li key={language}>
        <LangSelectorButton language={language} {...this.props} />
      </li>
    ));

    return <ul className="lang-selector">{buttons}</ul>;
  }
}
