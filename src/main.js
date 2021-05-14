import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyArp_Hc-h2hIIp-slSKvldVcQWwJTPVYtA",
  authDomain: "csg-gauntlett.firebaseapp.com",
  projectId: "csg-gauntlett",
  storageBucket: "csg-gauntlett.appspot.com",
  messagingSenderId: "434729807740",
  appId: "1:434729807740:web:9c65b03c9bd1498b26fef9"
};

import firebase from "firebase";
firebase.initializeApp(firebaseConfig)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
