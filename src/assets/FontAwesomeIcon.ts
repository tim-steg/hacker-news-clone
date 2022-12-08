/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBars,
  faCaretDown,
  faCircleXmark,
  faUpLong,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";
import { faReddit } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faBars);
library.add(faReddit);
library.add(faCaretDown);
library.add(faCircleXmark);
library.add(faUpLong);
library.add(faDownLong);

export default FontAwesomeIcon;
