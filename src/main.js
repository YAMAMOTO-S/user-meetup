import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Toasted from 'vue-toasted';

import firebase from 'firebase'
import 'firebase/auth'

Vue.use(Toasted);
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  
  if (user) {
    // auth前にあった空白でハマッた
    store.commit("auth/setAuthUser", user)
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
