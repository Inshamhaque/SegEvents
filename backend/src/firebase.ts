// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsX8KxZ38buq5araZAdsLhH5eFr_UMqRE",
  authDomain: "segevents.firebaseapp.com",
  projectId: "segevents",
  storageBucket: "segevents.firebasestorage.app",
  messagingSenderId: "444220558977",
  appId: "1:444220558977:web:a99150ed5facbd79a44780",
  measurementId: "G-FRVHPQBDBZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
