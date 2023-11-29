import { createApp } from "vue";
import "./styles/reset.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCfdy2keDRAnX2JJLw9WwIISXpheNlFHVA",
  },
});
app.mount("#app");
