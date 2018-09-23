import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faEnvelope,
  faPhone,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const loadIconLibrary = function() {
  library.add(faAt, faEnvelope, faPhone, faTimes);
};

export default loadIconLibrary;
