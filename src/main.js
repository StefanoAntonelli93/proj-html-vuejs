import { createApp } from "vue";
// import sass
import "./assets/scss/main.scss";
// import App.vue
import App from "./App.vue";
// import router
import { router } from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faFacebookF, faTwitter, faPinterestP, faMagnifyingGlass, faPhone);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");

