import React, { Component } from "react";

export default class LangSelectorButton extends Component {
  render() {
    const { language, changeLanguage } = this.props;
    const handleClick = function() {
      changeLanguage(language);
    };

    return <a onClick={handleClick}><div>{language}</div></a>;
  }
}
