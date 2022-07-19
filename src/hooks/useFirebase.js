import initialAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, updateProfile, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initialAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        console.log('email and password', email, password);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            }).finally(() => setIsLoading(false));
    }
    // sing In with email and password
    const signInWithEmailPassword = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            }).finally(() => setIsLoading(false));
    }

    // sing In with google

    const googleSingIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.push(destination);
            }).catch((error) => {
                setAuthError(error.message);
            });
    }

    // log out
    const logout = () => {
        setIsLoading(false);
        signOut(auth).then(() => {

        }).catch((error) => {

        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetch(`https://shrouded-taiga-93469.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log('admin data',data.admin);
                setAdmin(data.admin)
            })
    }, [user.email])

    // console.log('admin resutl',admin);
    // observed user login or not out
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken',idToken))
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth]);

    // save user to the database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        console.log('user send', user);
        fetch('https://shrouded-taiga-93469.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return {
        registerUser,
        user,
        admin,
        googleSingIn,
        signInWithEmailPassword,
        logout,
        isLoading,
        authError
    }
};

export default useFirebase;