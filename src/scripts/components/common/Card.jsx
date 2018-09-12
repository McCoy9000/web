import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

export default class Card extends Component {
  render() {
    return (
      <div>
        <h4>
          <FormattedMessage id={this.props.title} />
        </h4>
        <p>
          <FormattedMessage id={this.props.title + ".presentation"} />
        </p>
        <img src={this.props.src} alt={this.props.title} />
      </div>
    );
  }
}
