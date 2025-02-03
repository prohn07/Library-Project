import React from 'react'
import ("./registration.css")
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Registration() {

    var [state, setState] = useState({username:"", password:"" , email:"", fullname:""})

    const [response, setResponse ] =  useState("---");

    useEffect(()=>{

        axios.get("http://localhost:8888/user/getuser").then((res)=>{

            setResponse(res);

        }).catch((err)=>{})
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

                       
                        axios.post("http://localhost:8888/user/postuser", data).then((res)=>{
                            
                                alert(res.result)
                            
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

    <div id="maindiv">

        <h2>Registration:{response}</h2>
        <lable>Username:</lable> <br/>
        <input id="username" required type="text"/> <br/> <br/>

        <lable>Password:</lable> <br/>
        <input id="password" required type="password" /> <br/> <br/>

        <lable>Email:</lable> <br/>
        <input id="email" required type="email" /> <br/> <br/>

        <lable>Full Name:</lable> <br/>
        <input id="name" required type="text" /> <br/> <br/>

        <div style={{textAlign:"center"}}>
            <button onClick={fnpost}>Register</button> <br/> <br/>
            <Link to="/">Already have an account?Login here</Link>
        
        </div>
        
      
    </div>

  )
}

export default Registration
