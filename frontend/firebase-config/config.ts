// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google User:", result.user);
    return result.user.getIdToken(); // Return JWT token
  } catch (error) {
    console.error("Google Login Error:", error);
  }
};

const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log("GitHub User:", result.user);
    return result.user.getIdToken(); // Return JWT token
  } catch (error) {
    console.error("GitHub Login Error:", error);
  }
};

export { auth, signInWithGoogle, signInWithGithub };
