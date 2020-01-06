import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Toasted from 'vue-toasted';

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Toasted);
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    // auth前にあった空白でハマッた
    // UserProfileをFBから持ってくる
    await store.dispatch("auth/getAuthUser", user)
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
