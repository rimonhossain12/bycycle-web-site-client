import initialAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


initialAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            }).finally(() => setIsLoading(false));
    }

    return {
        registerUser,
        user,
        isLoading,
        authError
    }
};

export default useFirebase;