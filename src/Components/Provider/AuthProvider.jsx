import PropTypes from 'prop-types'
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import app from "../Firebase/firebase.config.js";
import {createContext, useEffect, useState} from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authing = {createUser, user, logOut, signIn, googleSignIn, updateUserProfile, loading}

    return (
        <AuthContext.Provider value={authing}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;