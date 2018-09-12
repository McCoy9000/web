import React, { Component } from "react";
import { en, es, it } from "../../../resources/images/langSelector";

export default class LangSelectorButton extends Component {
  render() {
    const { language, changeLanguage } = this.props;
    const handleClick = function() {
      changeLanguage(language);
    };

    return (
      <a onClick={handleClick}>
        <img
          className={"langSelectorButton"}
          src={(function() {
            switch (language) {
              case "en":
                return en;
              case "es":
                return es;
              case "it":
                return it;
              default:
                return en;
            }
          })()}
          alt={language}
          title={language}
        />
      </a>
    );
  }
}
