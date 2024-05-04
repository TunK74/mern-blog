// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6db0e.firebaseapp.com",
  projectId: "mern-blog-6db0e",
  storageBucket: "mern-blog-6db0e.appspot.com",
  messagingSenderId: "232578700035",
  appId: "1:232578700035:web:c218992c15c5994e2e0f36",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
