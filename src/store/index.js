import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/db'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

import auth from './modules/auth'
// import meetup from './modules/meetup'

Vue.use(Vuex)



export default new Vuex.Store({
  state() {
    return {
      meetups: [],
      meetup: []
    }
  },

  mutations: {
    setMeetups(state, meetups) {
      state.meetups = meetups
    },
    setMeetup(state, meetup) {
      state.meetup = meetup
    },
    ...vuexfireMutations,
  },


  actions: {
// 個別のMeetup入手
    getMeetup({commit}, meetupId) {
      return db.collection('meetups')
        .doc(meetupId)
        .get()
        .then(snapshot => {
          const meetup = snapshot.data()
          commit('setMeetup', meetup)
          return meetup
        }) 
    },
    // Meetupをとってくる
    bindmeetups: firestoreAction(({
      bindFirestoreRef
    }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('meetups', db.collection('meetups'))
    }),
    createMeetup({ rootState }, meetup) {
      // 現在のUserを取得
      const userRef = db.collection('profiles').doc(rootState.auth.user.uid)
      meetup.user = userRef
      
      return db.collection('meetups').add(meetup)
    }
  },
  modules: {
    auth,
  }
})
