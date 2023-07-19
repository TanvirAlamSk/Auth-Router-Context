import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const UserContext = createContext();

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// console.log(auth)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    // const user = "tanvir"

    const newUserSignup = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert("Signup successful");
            setUser(userCredential.user);
            console.log(userCredential.user)
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                alert("Üpdate Name");
            }).catch((error) => {
                alert(error);

            })
        }).catch((error) => {
            alert("error")
        })

    }

    const googleSignup = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            alert("Signup successful")
        }).catch((error) => {
            alert(error)
        })
    }

    const emailPasswordLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert("Login Successful");
            console.log(userCredential.user)
        }).catch((error) => {
            alert(error.code);
        })
    }


    const logOut = () => {
        signOut(auth).then(() => {
            alert("LogOut Successful");
        }).catch((error) => {
            alert(error);
        })
    }


    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setLoader(false)
        })
        return () => {
            unsubscriber()

        }
    }, [])

    const authInfo = { user, loader, newUserSignup, googleSignup, emailPasswordLogin, logOut }
    return (
        <div>
            <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
        </div>
    );
};

export default AuthContext;