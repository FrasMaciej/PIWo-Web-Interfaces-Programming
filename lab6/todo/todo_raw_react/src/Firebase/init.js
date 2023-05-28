// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6IKLqR5m6vulfFrusaYigaqe7DoddHjE",
    authDomain: "parzysty-925f0.firebaseapp.com",
    projectId: "parzysty-925f0",
    storageBucket: "parzysty-925f0.appspot.com",
    messagingSenderId: "66219833992",
    appId: "1:66219833992:web:6a78f3a86c3da662b4fd3d",
    measurementId: "G-15J184B5XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);