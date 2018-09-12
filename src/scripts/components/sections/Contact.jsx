import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact section">
        <h3 className="contact-fullname">
          <FormattedMessage id="contact.fullname" />
        </h3>
        <h4 className="contact-position">
          <FormattedMessage id="contact.position" />
        </h4>
        <h4>
          <abbr title="Mobile phone">
            <FontAwesomeIcon icon="phone" />
          </abbr>
          <span> </span>
          <FormattedMessage id="contact.phone" />
        </h4>
        <h4>
          <FontAwesomeIcon icon="envelope" />
          <span> </span>
          <a href="mailto:elisacuencatamariz@gmail.com">
            <FormattedMessage id="contact.email" />
          </a>
        </h4>
      </div>
    );
  }
}
