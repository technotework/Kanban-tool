import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/scss/global.scss";

Vue.config.productionTip = false;

// Initialize Vue
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
