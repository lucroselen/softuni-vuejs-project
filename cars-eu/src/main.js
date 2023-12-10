import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles/reset.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import { useUserStore } from "./store/userStore";

const app = createApp(App);
const pinia = createPinia();
app.use(router);

app.use(pinia);
const userStore = useUserStore();
userStore.getPersistedProfile();
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCfdy2keDRAnX2JJLw9WwIISXpheNlFHVA",
  },
});
app.mount("#app");
