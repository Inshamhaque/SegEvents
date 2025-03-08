"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(app);
