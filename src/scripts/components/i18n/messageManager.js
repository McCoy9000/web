import it from "react-intl/locale-data/it";
import es from "react-intl/locale-data/es";
import { addLocaleData } from "react-intl";
import messagesEn from "../../../resources/i18n/messagesEn.json";
import messagesIt from "../../../resources/i18n/messagesIt.json";
import messagesEs from "../../../resources/i18n/messagesEs.json";

function messageManager() {
  const availableLanguages = ["en", "it", "es"];

  const fallbackLanguage = "en";

  const messages = {
    en: messagesEn,
    it: messagesIt,
    es: messagesEs
  };

  const locale =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;

  const localeWithoutRegion = locale.split(/[-_]/)[0];

  const language = availableLanguages.includes(localeWithoutRegion)
    ? localeWithoutRegion
    : fallbackLanguage;

  const localeData = [...it, ...es];

  const initialize = function() {
    addLocaleData(localeData);
    this.setState({
      language: language
    });
  };

  const changeLanguage = function(newLanguage) {
    if (availableLanguages.includes(newLanguage)) {
      this.setState({
        language: newLanguage
      });
    } else {
      return "error.changeLang";
    }
  };

  const messageSource = {
    language: language,
    availableLanguages: availableLanguages,
    messages: messages,
    changeLanguage: changeLanguage,
    initMessages: initialize
  };

  return messageSource;
}

export const messageSource = messageManager();

export default messageManager;
