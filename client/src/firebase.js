// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-5c297.firebaseapp.com",
  projectId: "mern-realestate-5c297",
  storageBucket: "mern-realestate-5c297.firebasestorage.app",
  messagingSenderId: "828215096211",
  appId: "1:828215096211:web:91382a810a85c6ee756e66",
  measurementId: "G-V9MS56WF1N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
