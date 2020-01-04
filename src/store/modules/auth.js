import * as firebase from 'firebase'
import { db } from '@/db'



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
}
            


   export default {
      namespaced: true,
      actions
   }