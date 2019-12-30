import * as firebase from 'firebase'



const actions = {
   
   singUp(context, {email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(({ user }) => {
         return user
         }).catch(err => {
            const message = err.message
            return Promise.reject(message)
      })
   }
}
            


   export default {
      namespaced: true,
      actions
   }