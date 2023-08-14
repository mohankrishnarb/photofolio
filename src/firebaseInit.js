
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmqQDjuSGDSnpXzAhWaHs6v4zF36fEcA",
  authDomain: "blogging-app-86593.firebaseapp.com",
  projectId: "blogging-app-86593",
  storageBucket: "blogging-app-86593.appspot.com",
  messagingSenderId: "349111102582",
  appId: "1:349111102582:web:102e17fa3cd3eff06a8357",
  measurementId: "G-1LEG4X0BBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
