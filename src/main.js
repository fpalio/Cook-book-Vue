import { createApp } from "vue";
import { createPinia } from "pinia";
//ICON SET LINK
//https://icon-sets.iconify.design/
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.component("Icon", Icon);
app.use(createPinia());
app.use(router);

app.mount("#app");
