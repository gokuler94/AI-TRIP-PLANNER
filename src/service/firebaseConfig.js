// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGzZ0EimD0CCdHPh1XDWJxud4I936oF88",
  authDomain: "ai-trip-planner-f3cce.firebaseapp.com",
  projectId: "ai-trip-planner-f3cce",
  storageBucket: "ai-trip-planner-f3cce.firebasestorage.app",
  messagingSenderId: "427156216706",
  appId: "1:427156216706:web:e17d365be536a9af278d9b",
  measurementId: "G-BLLRDJ7CX2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 

