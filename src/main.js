import { createApp } from "vue";
// import sass
import "./assets/js/scss/main.scss";
import App from "./App.vue";
import { router } from "./router";

createApp(App).use(router).mount("#app");
