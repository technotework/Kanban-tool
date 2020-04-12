import { firebaseConfig } from "@/setting";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
const config = firebaseConfig;

const db = () => {
    return firebase.firestore();
};
const fn = () => {
    return firebase.functions();
};
const st = () => {
    return firebase.storage();
};
const fb = () => {
    return firebase;
};
export { db, fn, st, fb };

export default {
    firebase,
    init() {
        firebase.initializeApp(config);
        //firebase.analytics();
    }
};
