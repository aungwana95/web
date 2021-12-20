// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
    apiKey: "AIzaSyA7n--K3_QYy6KCC9Zk4MD061wdpVQQw88",

  authDomain: "webapp-84abb.firebaseapp.com",

  projectId: "webapp-84abb",

  storageBucket: "webapp-84abb.appspot.com",

  messagingSenderId: "534787161215",

  appId: "1:534787161215:web:0cf6bb93102ed1628f534a",

  measurementId: "G-WJYPM72KE0"

    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
