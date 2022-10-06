// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBlgRXURGuA3vzaC6N63ejfJQotWy5YD8M",
    authDomain: "netflix-clone-57dea.firebaseapp.com",
    projectId: "netflix-clone-57dea",
    storageBucket: "netflix-clone-57dea.appspot.com",
    messagingSenderId: "151930658487",
    appId: "1:151930658487:web:888c55d7d32e45770f3732",
    measurementId: "G-VQ7HM8WGE9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;