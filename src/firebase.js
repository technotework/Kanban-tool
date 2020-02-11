import firebase from 'firebase/app'
import 'firebase/analytics';
import 'firebase/auth'
import 'firebase/firestore'
import store from './store'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDL3Kio-UdKoxf9PsvVy7ZQ0YcTzAqgqBI",
  authDomain: "kanban-c1adc.firebaseapp.com",
  databaseURL: "https://kanban-c1adc.firebaseio.com",
  projectId: "kanban-c1adc",
  storageBucket: "kanban-c1adc.appspot.com",
  messagingSenderId: "142124422720",
  appId: "1:142124422720:web:4e6e236029d7330518f1a5",
  measurementId: "G-KY5Y4EB809"
};

export default {

  init() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    //セッション保持形式
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login(email, password) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('app/onAuthStateChanged', user);
      store.commit('app/onUserStatusChanged', user.uid ? true : false);
    });
  },
  db() {
    return firebase.firestore();
  }
}