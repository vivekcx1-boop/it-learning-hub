import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQGnAnLqX36Qls_8PosmAK4IGS62XD95c",
  authDomain: "it-learning-hub-b310e.firebaseapp.com",
  projectId: "it-learning-hub-b310e",
  storageBucket: "it-learning-hub-b310e.firebasestorage.app",
  messagingSenderId: "19055424569",
  appId: "1:19055424569:web:d97739aa920b7f269189e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export App
export default app;