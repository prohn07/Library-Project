import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {

  return (

    <div id="maindiv">

        <h2>Login Page</h2>
        <lable>Username:</lable> <br/>
        <input type="text"/> <br/> <br/>
        <lable>Password:</lable> <br/>
        <input type="password" /> <br/> <br/>

        <div style={{textAlign:"center"}}>
            <button>Login</button> <br/> <br/>
            <Link to="/registration">New user?Register here</Link>
       
        </div>
        
      
    </div>

  )

}

export default Login
