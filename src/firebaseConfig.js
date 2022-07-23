// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFb6PfIG4ZhAiY5HtLp7Oh9boIcQ6nUPM",
  authDomain: "doc-836b0.firebaseapp.com",
  projectId: "doc-836b0",
  storageBucket: "doc-836b0.appspot.com",
  messagingSenderId: "518718468428",
  appId: "1:518718468428:web:3ad33da6e49299e76b9fe9",
  measurementId: "G-CTZ1CSPRQL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);