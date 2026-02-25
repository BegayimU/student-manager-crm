// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2hVMQkrJvu13A4LI8eM8F1xKCx4GuXxg",
  authDomain: "student-manager-crm.firebaseapp.com",
  projectId: "student-manager-crm",
  storageBucket: "student-manager-crm.firebasestorage.app",
  messagingSenderId: "306224938835",
  appId: "1:306224938835:web:072c68c6ad0e8016d9aba6",
  measurementId: "G-V8PB8FYDJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);