// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rect-auth-83aed.firebaseapp.com",
  projectId: "rect-auth-83aed",
  storageBucket: "rect-auth-83aed.appspot.com",
  messagingSenderId: "1095588527262",
  appId: "1:1095588527262:web:8720f1194f73baa26acf8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);