// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiYJRzFAWUFwJb1YM4-1udyNV0TdWH1KI",
  authDomain: "joshua-blogrr.firebaseapp.com",
  databaseURL: "https://joshua-blogrr.firebaseio.com",
  projectId: "joshua-blogrr",
  storageBucket: "joshua-blogrr.appspot.com",
  messagingSenderId: "584405599927",
  appId: "1:584405599927:web:9b78bc354e54a33bd0af32",
  measurementId: "G-JYBL1R4BDF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

const Firebase = () => {
  return {db, auth, storage}
}

export default Firebase;