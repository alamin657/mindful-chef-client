import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const googleProviderLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const githubProviderLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const updateProfileUser = (name, photoUrl, user) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: photoUrl

        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setLoading(false);
            setUser(loggedUser);

        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleProviderLogin,
        githubProviderLogin,
        updateProfileUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;