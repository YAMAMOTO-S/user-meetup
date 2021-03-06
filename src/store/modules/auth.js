/* eslint-disable no-unused-vars */
import * as firebase from 'firebase'
import { db } from '@/db'


const getters = {
   isAuthenticated(state) {
      return !!state.user
   }
}
const actions = {
   // eslint-disable-next-line no-unused-vars
   singUp(context, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(({ user }) => {
         return user
         }).catch(err => {
            const message = err.message
            return Promise.reject(message)
      })
   },
   createProfile(_, {uid, userProfile}) {
      return db
         // uid, userProfileをProfileに入れる
         .collection('profiles')
         .doc(uid).set(userProfile)
   },
   login(_, { email, password }) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
   },
   singOut({commit}) {
      return firebase.auth().signOut()
         .then(() => {
            commit('setAuthUser', null);
         })
   },
   getAuthUser({commit}, user) {
      return db.collection('profiles').
         doc(user.uid)
         .get()
         .then(snapshot => {
            const profile = snapshot.data()
            user.profile = profile
            commit('setAuthUser', user)
            return profile
         })
   },
   // プロファイルの更新
   updateInfo({commit}, profile) {
      return db.collection('profiles')
         .doc(profile.user)
         .update(profile)
         .then(() => {
            commit('setUserProfile', profile)
            return true
      })
   }
}
const mutations = {
   setAuthUser(state, user) {
      state.user = user
   },
   setUserProfile(state, profile) {
      state.user.profile = profile
   }
}

export default {
   namespaced: true,
   state: {
      user: null
   },
   actions,
   mutations,
   getters
}