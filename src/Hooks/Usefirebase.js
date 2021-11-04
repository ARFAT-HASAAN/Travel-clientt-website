import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react'
import FirebaseInitialized from "../firebase/Firebaseinitialized";

FirebaseInitialized()
const Usefirebase = () => {
    const [isloading, setloading] = useState(true)
    const [user, setUser] = useState({})



    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const SingWIthGoogel = () => {
        setloading(true)
        return signInWithPopup(auth, Googleprovider)
            // .then(resutl => {
            //     setUser(resutl.user)

            // })
            .finally(() => { setloading(false) })

    }


    // observer 
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser()
            }

            setloading(false)
        });

        return () => unsubcribe;

    }, [auth])


    const logout = () => {
        setloading(true)
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .finally(() => { setloading(false) })

    }

    return {
        user,
        logout,
        SingWIthGoogel,
        isloading
    }

}

export default Usefirebase;