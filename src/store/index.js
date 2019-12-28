import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/db'
import {
  vuexfireMutations,
  firestoreAction
} from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      meetups: []
    }
  },
  mutations: {
    setMeetups(state, meetups) {
      state.meetups = meetups
    },
    ...vuexfireMutations,
  },
  actions: {
    test() {
      alert('Hello Vuex')
    },
    bindmeetups: firestoreAction(({
      bindFirestoreRef
    }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('meetups', db.collection('meetups'))
    }),
  },
  modules: {
  }
})
