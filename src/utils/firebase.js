// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQFwz5BQ1yP9v_rkZZ55GvUhr2Qvpk4uk",
  authDomain: "netflixgpt-namastereact.firebaseapp.com",
  projectId: "netflixgpt-namastereact",
  storageBucket: "netflixgpt-namastereact.firebasestorage.app",
  messagingSenderId: "479661510603",
  appId: "1:479661510603:web:095811755303b94699b04e",
  measurementId: "G-46QN4MSR6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();