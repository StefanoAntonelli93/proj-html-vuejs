import { createApp } from "vue";
// import main sass
import "./assets/scss/main.scss";
// import App.vue
import App from "./App.vue";
// import router
import { router } from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCloudversify } from "@fortawesome/free-brands-svg-icons";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch20 } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faFacebookF,
  faTwitter,
  faPinterestP,
  faMagnifyingGlass,
  faPhone,
  faLocationDot,
  faPhoneVolume,
  faStopwatch,
  faDatabase,
  faMoneyBill1Wave,
  faGaugeHigh,
  faGem,
  faCloudversify,
  faTabletScreenButton,
  faStopwatch20,
  faCaretRight,
  faCaretLeft
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
