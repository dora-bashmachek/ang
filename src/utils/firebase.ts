// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-E_8UUGbvyNMTuUH_PsvOhr-U284Ghkw",
  authDomain: "angular-exam-58035.firebaseapp.com",
  databaseURL: "https://angular-exam-58035-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-exam-58035",
  storageBucket: "angular-exam-58035.appspot.com",
  messagingSenderId: "774191161402",
  appId: "1:774191161402:web:d7f06cf97cd61c69831503",
  measurementId: "G-N36G9EMYLP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);