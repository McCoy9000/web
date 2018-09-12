import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const loadIconLibrary = function() {
  library.add(faAt, faEnvelope, faPhone);
};

export default loadIconLibrary;
