// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe_LYOoCSElMR8tVUGuNCLDkU2ZxImvqs",
  authDomain: "netflixgpt-2da66.firebaseapp.com",
  projectId: "netflixgpt-2da66",
  storageBucket: "netflixgpt-2da66.appspot.com",
  messagingSenderId: "187067420388",
  appId: "1:187067420388:web:22a34ec80a5fea336466f1",
  measurementId: "G-ZWSXYMBGXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()