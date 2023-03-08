
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  // signOut,
} from "firebase/auth";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
    navigate("/")
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
    navigate("/")
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
    </div>
  ) 
}

export default Login