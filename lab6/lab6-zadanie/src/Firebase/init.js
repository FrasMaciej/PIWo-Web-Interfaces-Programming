import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6IKLqR5m6vulfFrusaYigaqe7DoddHjE",
    authDomain: "parzysty-925f0.firebaseapp.com",
    projectId: "parzysty-925f0",
    storageBucket: "parzysty-925f0.appspot.com",
    messagingSenderId: "66219833992",
    appId: "1:66219833992:web:d93e8a27570e26adb4fd3d",
    measurementId: "G-TD014WPGFC"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
auth.setPersistence(browserSessionPersistence);
export const firestore = getFirestore(app);

