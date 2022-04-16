import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5qZ5WggXjpRoxsBsITW_bwOsHfROlhes",
  authDomain: "tgp-training-app.firebaseapp.com",
  projectId: "tgp-training-app",
  storageBucket: "tgp-training-app.appspot.com",
  messagingSenderId: "301312236239",
  appId: "1:301312236239:web:0077e4a7af7ac51fb475ba",
  measurementId: "G-HXV18M7GZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();

export default app;
