import React ,{ useState} from 'react'
import "./register.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"

const Register = () =>{

    const navigate =useNavigate()
    
    const [ user , setUser] = useState({
        firstname:"",
        lastname:"",
        mobilenumber:"",
        email:"",
        password:""
    })
    const handleChange =e =>{
       
        const {name ,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = ()=> {
        const {firstname , lastname , mobilenumber, email ,password} = user
        if(firstname && lastname && mobilenumber && email && password){
           
          axios.post("http://localhost:9002/register", user)
          .then( res =>{
            alert(res.data.message)
            navigate("/login")
           //window.location='/login'
        })
          
        }
        else{
            alert("invalid input")
        }
    }

    return (
        <div className="register">
            {console.log("User", user)}
        <h1>Register</h1> 
        <input type="text" name="firstname" value={user.firstname} placeholder="Enter your first name" onChange={handleChange}></input>
        <input type="text" name="lastname" value={user.lastname}  placeholder="Enter your last name" onChange={handleChange}></input>
        <input type="text" name="mobilenumber" value={user.mobilenumber}  placeholder="Enter your mobile number" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email}  placeholder="Enter your email-id" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password}  placeholder="Enter your password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
     </div>
    )
}

export default Register