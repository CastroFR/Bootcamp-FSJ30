// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXAKroe6fUr9-_-roL1RZhHoUeuX3CYXk",
  authDomain: "authentification-app-e7140.firebaseapp.com",
  projectId: "authentification-app-e7140",
  storageBucket: "authentification-app-e7140.firebasestorage.app",
  messagingSenderId: "53729833723",
  appId: "1:53729833723:web:830d4c81f2a33e5a62765e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);