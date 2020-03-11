import { firebaseConfig } from "@/setting";
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

// Initialize Firebase
const config = firebaseConfig;

export default {
  firebase,
  initApp() {
    firebase.initializeApp(config)
  },
  init() {
    firebase.initializeApp(config);
    firebase.analytics();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  db() {
    return firebase.firestore();
  },
  fn() {
    return firebase.functions();
  },
  st() {
    return firebase.storage();
  }
}