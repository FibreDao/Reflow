import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";

import "./main.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
