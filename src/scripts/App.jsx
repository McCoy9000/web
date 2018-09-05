import "../styles/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { IntlProvider } from "react-intl";
import { messageSource } from "./components/i18n/messageManager";

const {
  availableLanguages,
  messages,
  changeLanguage,
  initMessages
} = messageSource;

class App extends Component {
  componentWillMount() {
    initMessages.apply(this);
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.language}
        key={this.state.language}
        messages={messages[this.state.language]}
      >
        <Router path="/">
          <Layout
            changeLanguage={changeLanguage.bind(this)}
            languages={availableLanguages.filter(
              lang => lang !== this.state.language
            )}
          />
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
