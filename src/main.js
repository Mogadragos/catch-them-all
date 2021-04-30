import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

require("@/assets/css/reset.css");

createApp(App).mount("#app");
