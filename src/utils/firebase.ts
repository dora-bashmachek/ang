// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGeiBGyGV3gd0W7KLgGMK3WbnLxnWLk3E",
  authDomain: "diploma-ang.firebaseapp.com",
  projectId: "diploma-ang",
  storageBucket: "diploma-ang.appspot.com",
  messagingSenderId: "137060095104",
  appId: "1:137060095104:web:0e0db1453149c0564e0265",
  measurementId: "G-ZT7858HFC4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);