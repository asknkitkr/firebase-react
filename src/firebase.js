// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMTLa8pqXdfgcR6e5QiCMRp_f9LOO7axM",
  authDomain: "authentication-01-cce30.firebaseapp.com",
  projectId: "authentication-01-cce30",
  storageBucket: "authentication-01-cce30.appspot.com",
  messagingSenderId: "754671371574",
  appId: "1:754671371574:web:8d1f7be16398c15d81df97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
