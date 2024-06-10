import { createApp } from "vue";
// import sass
import "./assets/scss/main.scss";
// import App.vue
import App from "./App.vue";
// import router
import { router } from "./router";

createApp(App).use(router).mount("#app");

