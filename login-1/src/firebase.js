import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
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
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export {db,auth}