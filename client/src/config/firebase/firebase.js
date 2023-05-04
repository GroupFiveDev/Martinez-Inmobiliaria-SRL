// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn5lGtdtnkpX4hIyKsjwPyUqKGNV_5Cpw",
  authDomain: "tj-inmobiliaria-ecbd7.firebaseapp.com",
  projectId: "tj-inmobiliaria-ecbd7",
  storageBucket: "tj-inmobiliaria-ecbd7.appspot.com",
  messagingSenderId: "638721060677",
  appId: "1:638721060677:web:e6a7c4f918d2fb720d982c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default onAuthStateChanged;
