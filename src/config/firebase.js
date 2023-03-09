// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-D0-DmOZqkeQV-7079pc6hAXEilIn_1M",
  authDomain: "pigeon-6a5a4.firebaseapp.com",
  projectId: "pigeon-6a5a4",
  storageBucket: "pigeon-6a5a4.appspot.com",
  messagingSenderId: "101354337358",
  appId: "1:101354337358:web:de093cc80b07fd5ca67f1f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const googleProvider = new FacebookAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

