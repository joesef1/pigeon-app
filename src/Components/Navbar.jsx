import React from 'react'
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";



const Navbar = () => {
const [user] = useAuthState(auth);

const signUserOut = async () => {
  await signOut(auth);
};



  return (
    <div>
      <Link to='/'>Home</Link>
      {!user ? <Link to='/Login'>Login</Link>:  <Link to='/Createpost'>Createpost</Link>}
    

      <div className='user'>
{user &&(<>  
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ''} alt="" width='100' height='100'/>
          <button onClick={signUserOut}> Signout</button>
      </>)}
      

      </div>
    </div>
  )
}

export default Navbar
