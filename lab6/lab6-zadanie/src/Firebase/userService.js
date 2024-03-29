import { auth, } from "./init";
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    linkWithCredential
} from "firebase/auth";

import { useState, useEffect } from "react";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const logInWithFacebook = async () => {
    try {
        const response = await signInWithPopup(auth, facebookProvider);
        const user = response.user;
        await linkFacebookToExistingAccount(user);
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

export const logInWithEmail = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
        return user;
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const updateDisplayName = async (displayName) => {
    try {
        const user = auth.currentUser;
        await updateProfile(user, { displayName });
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const registerWithEmail = async (email, password, displayName) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await updateProfile(user, { displayName: displayName });
        return user;
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
}

export const linkFacebookToExistingAccount = async (user) => {
    try {
        const credential = await facebookProvider.credentialFromError(user);
        await linkWithCredential(user, credential);
    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};

export const logout = () => {
    signOut(auth);
}