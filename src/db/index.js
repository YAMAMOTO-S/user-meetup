import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
   .initializeApp({
      apiKey: "AIzaSyDoEynUNppW4BvIy7FJ7FLlGj-RM_JrLys",
         authDomain: "user-meetup.firebaseapp.com",
         databaseURL: "https://user-meetup.firebaseio.com",
         projectId: "user-meetup",
         storageBucket: "user-meetup.appspot.com",
         messagingSenderId: "141990947526",
         appId: "1:141990947526:web:f592d548bd4b8e4e9645c7",
         measurementId: "G-DNWJTKQ20T"
   })
   .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const {
   TimeStamp,
   GeoPoint
} = firebase.firestore
export {
   TimeStamp,
   GeoPoint
}