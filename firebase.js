// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL6OhLGN8bocKKRmoljkjCXq9cvQbbdCM",
  authDomain: "inventory-management-afd05.firebaseapp.com",
  projectId: "inventory-management-afd05",
  storageBucket: "inventory-management-afd05.appspot.com",
  messagingSenderId: "924715037851",
  appId: "1:924715037851:web:a4e9055fb23b018f90823e",
  measurementId: "G-EXTZHBRQX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export { firestore };