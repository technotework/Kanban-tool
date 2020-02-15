import firebase from 'firebase/app'
import 'firebase/analytics';
import 'firebase/auth'
import 'firebase/firestore'

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
  firebase,
  init() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    //セッション保持形式
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  db() {
    return firebase.firestore();
  }
}