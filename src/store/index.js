import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/db'

Vue.use(Vuex)

const meetups =
 [{
    id: "ad7asdsa68dasd",
    title: "I have Driller",
    description: "I will exchange this super driller...",
    user: "2398173193",
    image: "https://images.unsplash.com/photo-1458829549177-e9a8f3db5b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    location: "Germany",
    tags: ["tools", "helping"] // can be active/inactive,
  },
  {
    id: "f7ds6d7f8ds6f76ds7f67d8s",
    title: "I will teach programming",
    description: "I will make you super programmer",
    user: "2398173193",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    location: "Germany",
    tags: ["programming", "pc"] // can be active/inactive
  }
]



export default new Vuex.Store({
  state() {
    return {
      meetups: []
    }
  },
  mutations: {
    setMeetups(state, meetups) {
      state.meetups = meetups
    }
  },
  actions: {
    test() {
      alert('Hello Vuex')
    },
    getMeetups() {
      // firebaseを呼び出してデータをとる
      db.collection('meetups')
        .doc('Ge0tI6AfCjNrBQduntIS')
        .get()
        .then((snapshot) => {
          debugger
          const meetup = snapshot.data()
          return meetup
      })
      this.commit('setMeetups', meetups)
    },
  },
  modules: {
  }
})
