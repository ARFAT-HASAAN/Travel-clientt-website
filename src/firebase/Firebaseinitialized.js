import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase";

const FirebaseInitialized = () => {

    return initializeApp(firebaseConfig);
}

export default FirebaseInitialized;