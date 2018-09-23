import React, { Component } from "react";
import Header from "./Header";
import NavMenu from "./NavMenu";
import Body from "./Body";
import Footer from "./Footer";
import Feedback from "../feedback/Feedback";

export default class Layout extends Component {
  state = {
    showFeedback: false,
    messageId: "feedback.welcome"
  };

  componentDidMount() {
    const layout = document.querySelector(".layout");
    layout.addEventListener("feedback", e => this.showMessage(e.detail.text));
  }

  showMessage(messageId) {
    this.setState({
      showFeedback: true,
      messageId: messageId
    });
  }
  closeMessage() {
    this.setState({
      showFeedback: false,
      messageId: "feedback.welcome"
    });
  }

  render() {
    const closeMessage = this.closeMessage;
    return (
      <div className="layout">
        <Header {...this.props} />
        <NavMenu />
        <Feedback
          showFeedback={this.state.showFeedback}
          feedbackMessageId={this.state.messageId}
          closeMessage={closeMessage.bind(this)}
        />
        <Body />
        <Footer />
      </div>
    );
  }
}
