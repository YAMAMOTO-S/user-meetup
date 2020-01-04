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
   }
}
const mutations = {
   setAuthUser(state, user) {
      state.user = user
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