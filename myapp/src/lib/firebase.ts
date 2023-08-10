// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoqnrs1fyBpqSIaIHC79HEL6Qb0YmDEmc",
    authDomain: "fireship-sveltekit-app.firebaseapp.com",
    projectId: "fireship-sveltekit-app",
    storageBucket: "fireship-sveltekit-app.appspot.com",
    messagingSenderId: "975905346850",
    appId: "1:975905346850:web:957a3834661c2e3c2a017b",
    measurementId: "G-84HXMBKVND"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage();
