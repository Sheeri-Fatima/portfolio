// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBeKaT7BvjCfW9dBfYdwOQrBVwwbtGRw3o",
  authDomain: "portfolio-9ad05.firebaseapp.com",
  databaseURL: "https://portfolio-9ad05-default-rtdb.firebaseio.com",
  projectId: "portfolio-9ad05",
  storageBucket: "portfolio-9ad05.firebasestorage.app",
  messagingSenderId: "658074068505",
  appId: "1:658074068505:web:7a96ba450b5160ec8b6c88",
  measurementId: "G-RKPWNTW7V3"
};

const app = initializeApp(firebaseConfig);

// ✅ Auth & DB
export const auth = getAuth(app);
export const database = getDatabase(app);

// ✅ Sign in anonymously at startup (so `.read` rules work)
signInAnonymously(auth).catch((error) => {
  console.error("Anonymous sign-in failed:", error.code, error.message);
});
