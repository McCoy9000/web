import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

export default class Dossier extends Component {
  render() {
    const { images, index } = this.props;
    const name = images[index].name.replace(/.png|.jpe?g|.gif/, "");

    return (
      <div className="dossier">
        <h3 className="dossier-title">{name}</h3>
        <p className="dossier-text">
          <FormattedMessage id={name + ".text"} />
        </p>
        <img
          className="dossier-image"
          src={images[index].src}
          alt={name}
          title={name}
        />
        <p className="dossier-footer">
          <FormattedMessage id={name + ".footer"} />
        </p>
      </div>
    );
  }
}
