// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw",
  authDomain: "expense-tracker-19957.firebaseapp.com",
  projectId: "expense-tracker-19957",
  storageBucket: "expense-tracker-19957.appspot.com",
  messagingSenderId: "250642098611",
  appId: "1:250642098611:web:1676947cb46d8ed31dc3c6",
  measurementId: "G-P7NKVC9WHN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};