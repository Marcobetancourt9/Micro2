// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADbpqXUPrRuAnlgkWbibAP1p3cLGsDQ24",
  authDomain: "microproyecto2-32f10.firebaseapp.com",
  projectId: "microproyecto2-32f10",
  storageBucket: "microproyecto2-32f10.firebasestorage.app",
  messagingSenderId: "947132271907",
  appId: "1:947132271907:web:6f6a988e7e095c42511096",
  measurementId: "G-5E217VJR6S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);