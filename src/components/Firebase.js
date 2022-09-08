// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5k0D_w0KYlXY8zko6n5HC_3KYOTX02ug",
  authDomain: "noobs-d67c1.firebaseapp.com",
  projectId: "noobs-d67c1",
  storageBucket: "noobs-d67c1.appspot.com",
  messagingSenderId: "510438525641",
  appId: "1:510438525641:web:ac6ec07e78ae333758db18",
  measurementId: "G-75JQ2T4WEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();