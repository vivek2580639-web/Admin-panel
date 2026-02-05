import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMJXNqdrVaQt9GT_agP58EeC9HYyua7Nc",
  authDomain: "vansh-champion.firebaseapp.com",
  databaseURL: "https://vansh-champion-default-rtdb.firebaseio.com",
  projectId: "vansh-champion",
  storageBucket: "vansh-champion.firebasestorage.app",
  messagingSenderId: "316139204876",
  appId: "1:316139204876:web:9bcefc5be5ec37898d1929"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
