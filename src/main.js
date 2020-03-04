import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import font from "@/vender/font"
import './components/scss/global.scss'

Vue.use(VueHead);

Vue.config.productionTip = false

// Initialize Vue
new Vue({
  router,
  store,
  head: {
    title: {
      inner: 'KANBAN'
    },
    script: [
      {
        type: 'text/javascript',
        inner: font,

      }
    ]
  },
  render: h => h(App)
}).$mount('#app')
