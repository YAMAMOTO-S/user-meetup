import * as firebase from 'firebase'



// eslint-disable-next-line no-unused-vars
const actions = {
   singUp(context, { email, password }) {
      debugger
      return firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(user => {
            debugger
            return user
         }).catch(err => {
            console.log(err)
            debugger
      })
   }
};


export default {
   namespaced: true,
   actions
}