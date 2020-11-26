import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2a3CiZZLJBZGE5Tal5owq1Y-Hwt_vCoI",
  authDomain: "crud-firebase-9986e.firebaseapp.com",
  databaseURL: "https://crud-firebase-9986e.firebaseio.com",
  projectId: "crud-firebase-9986e",
  storageBucket: "crud-firebase-9986e.appspot.com",
  messagingSenderId: "782878054091",
  appId: "1:782878054091:web:76de4e3b935da333012d4e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}