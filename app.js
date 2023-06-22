// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoJ75cs1bxDd_ANQQiiIbv7QBX6ppVokQ",
  authDomain: "dailychecks-3e84b.firebaseapp.com",
  projectId: "dailychecks-3e84b",
  storageBucket: "dailychecks-3e84b.appspot.com",
  messagingSenderId: "886953267352",
  appId: "1:886953267352:web:1ffe5284b22fe2364480ed",
  measurementId: "G-1S2R9B3YL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
