import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Feedback extends Component {
  render() {
    const { feedbackMessageId, showFeedback, closeMessage } = this.props;

    return (
      <div
        className={"feedback " + (showFeedback ? " visible " : " invisible ")}
        onClick={closeMessage}
      >
        <div className="closingButton">
          <FontAwesomeIcon icon="times" />
        </div>
        <p>
          <FormattedMessage id={feedbackMessageId} />
        </p>
      </div>
    );
  }
}
