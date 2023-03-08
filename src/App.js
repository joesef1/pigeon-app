import './App.scss';
import {BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import  Main  from "./Pages/Main";
import  Login  from "./Pages/Login.jsx";
import  Createpost from "./Pages/create-post/Createpost";
import Navbar from "./Components/Navbar.jsx";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Createpost' element={<Createpost/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
