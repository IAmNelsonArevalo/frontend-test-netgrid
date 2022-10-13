import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

/** Styles */
import "./assets/scss/styles.scss";
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios'

axios.defaults.baseURL = "https://backend-test-netgrid.herokuapp.com/api"
// @ts-ignore
axios.defaults.headers = {
  "Access-Control-Allow-Origin": "*"
}

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueSweetalert2)
  .mount('#app')
