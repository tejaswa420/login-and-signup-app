//import logo from './logo.svg';
import './App.css';
import Homepage from "./components/login/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/login/register/register"
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import {useState} from 'react';


function App() {

  const [ user , setLoginUser] =useState({})
   
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route  path="/home" element={user && user._id ?<Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} ></Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

        </Router>
      
    </div>
  );
}

export default App;
