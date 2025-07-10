import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLrl_m4vMajOB0mlLrqlhq8rCHmyGegTk",
    authDomain: "apex-ai-cfa78.firebaseapp.com",
    projectId: "apex-ai-cfa78",
    storageBucket: "apex-ai-cfa78.firebasestorage.app",
    messagingSenderId: "676916079225",
    appId: "1:676916079225:web:fe1eb236d58f80e29342a8",
    measurementId: "G-8B008PLLKX"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);