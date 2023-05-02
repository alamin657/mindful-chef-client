import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const githubProviderLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        user,
        createUser,
        googleProviderLogin,
        githubProviderLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;