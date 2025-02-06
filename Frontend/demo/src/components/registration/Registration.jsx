import React from 'react'
import ("./registration.css")
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Registration() {

    var [state, setState] = useState({username:"", password:"" , email:"", fullname:""})

    useEffect(()=>{

        localStorage.removeItem("token"); 
        
    
      });

    function fnpost() {

        if(document.querySelector("#username").value==="") {

            alert("please enter username")


        }else{

             if(document.querySelector("#password").value==="") {

                alert("please enter password")

             }else{

                if(document.querySelector("#email").value==="") {

                    alert("please enter email")

                }else{

                    if(document.querySelector("#name").value==="") {

                        alert("please enter fullname")

                    }else{

                        var data = {
                            username:document.querySelector("#username").value,
                            password:document.querySelector("#password").value,
                            email:document.querySelector("#email").value,
                            name:document.querySelector("#name").value,
                
                        }

                       
                        axios.post("http://localhost:8888/user/newuser", data).then((res)=>{
                            
                                alert(res.data.result)
                            
                        }).catch((err)=>{

                            alert(err.message)
                        })
                        
                
                        document.querySelector("#username").value = "";
                        document.querySelector("#password").value = "";
                        document.querySelector("#email").value = "";
                        document.querySelector("#name").value = "";
                
                    }

                    }

                }

             }

        }


        

  return (

    <div id="Registrationmaindiv" className='w-25 shadow p-4'>

        <h2>Registration</h2><br/>
        <label>Username:</label> <br/>
        <input className='form-control' id="username" required type="text"/> <br/>

        <label>Password:</label> <br/>
        <input className='form-control' id="password" required type="password" /> <br/>

        <label>Email:</label> <br/>
        <input className='form-control' id="email" required type="email" /> <br/>

        <label>Full Name:</label> <br/>
        <input className='form-control' id="name" required type="text" /> <br/>

        <div style={{textAlign:"center"}}>
            <button className="btn btn-primary w-100" onClick={fnpost}>Register</button> <br/><br/>
            <Link to="/"><h5 className='link'>Already have an account?Login here</h5></Link>
        
        </div>
        
      
    </div>

  )
}

export default Registration
