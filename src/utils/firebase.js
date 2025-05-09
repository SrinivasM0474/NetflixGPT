// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFXQIfQDZlMRGNCJ3vXrir-Yh71FiPFXk",
  authDomain: "netflixgpt-52536.firebaseapp.com",
  projectId: "netflixgpt-52536",
  storageBucket: "netflixgpt-52536.firebasestorage.app",
  messagingSenderId: "195714287669",
  appId: "1:195714287669:web:9857db1db4617cd703c97c",
  measurementId: "G-NQM9XJMMDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
