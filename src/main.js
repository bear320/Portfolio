import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "remixicon/fonts/remixicon.css";

createApp(App).use(store).use(router).mount("#app");

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});
