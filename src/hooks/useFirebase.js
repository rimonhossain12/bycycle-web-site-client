import initialAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut   } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initialAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    const registerUser = (email, password,history) => {
        console.log('email and password',email,password);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                history.push('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            }).finally(() => setIsLoading(false));
    }
    // sing In with email and password

    // log out
    const logout = () => {
        setIsLoading(false);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            setAuthError(error.message);
        });
    }
    // observed user login or not out
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth]);


    return {
        registerUser,
        user,
        logout,
        isLoading,
        authError
    }
};

export default useFirebase;