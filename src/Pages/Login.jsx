// import React from 'react'
// import { auth, provider } from "../config/firebase";
// import { signInWithPopup } from "firebase/auth";
// import {useNavigate} from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const signInWithGoogle  = async () => { 
//   const result = await signInWithPopup(auth, provider)
//   console.log(result);
//   navigate("/")
//   };
//   return (
//     <div>
//     <p> sign in with google to continue</p> 
//     <button onClick={signInWithGoogle}> Sign In With Google </button>
//     </div>
//   ) 
// }

// export default Login
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sign In</button>

      <button onClick={signInWithGoogle}> Sign In With Google</button>

      <button onClick={logout}> Logout </button>
    </div>
  );
};
