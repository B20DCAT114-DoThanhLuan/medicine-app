// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCSTI4__yp9eplsNPLSGYarkMJz-72Z2w",
  authDomain: "mobile-58393.firebaseapp.com",
  projectId: "mobile-58393",
  storageBucket: "mobile-58393.appspot.com",
  messagingSenderId: "727424232845",
  appId: "1:727424232845:web:0a3c03046c3b332e1361c4",
  measurementId: "G-CEBEMQBERP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
