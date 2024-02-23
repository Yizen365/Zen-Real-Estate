// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zen-real-estates.firebaseapp.com",
  projectId: "zen-real-estates",
  storageBucket: "zen-real-estates.appspot.com",
  messagingSenderId: "88193072388",
  appId: "1:88193072388:web:d58f2198e98010e87b2451"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);