import { auth } from "./init";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

import { useState, useEffect } from "react";

const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            setUser(u);
        });
        return () => unsubscribe();
    }, []);

    return user;

}

export const logout = () => {
    signOut(auth);
}