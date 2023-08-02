// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCUYsYc8srxyj-rmeRV0gLYDy9Bnii6g7g",
  authDomain: "eshop-8dd6d.firebaseapp.com",
  projectId: "eshop-8dd6d",
  storageBucket: "eshop-8dd6d.appspot.com",
  messagingSenderId: "1014211217978",
  appId: "1:1014211217978:web:f0dbd2172abbe42c894303",
  measurementId: "G-MF801YEWKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
