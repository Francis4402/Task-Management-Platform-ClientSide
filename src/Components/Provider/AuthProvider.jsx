import app from "../Firebase/firebase.config.js";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import {createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import axios from "axios";
import useAxiosPublic from "../AxiosFiles/useAxiosPublic.jsx";

const auth = getAuth(app)

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (name, email, password, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        return userCredential.user;
                    })
                    .catch(error => {
                        throw error;
                    })
            })
    }

    const signinwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = { user, setUser, createUser, signInUser, logOut, loading, signinwithGoogle }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}


export default AuthProvider;