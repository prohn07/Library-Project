import {useEffect} from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { axiosNoAuth } from '../../utils/axios';
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  
  var dispatch = useDispatch();

  
  
  function fnlogin() {

    var data = {
      username:document.querySelector("#username").value,
      password:document.querySelector("#password").value

    }

    axiosNoAuth.post("/user/loginuser", data).then((res)=>{

      if(res.data.ok) {

        alert(res.data.result)
        localStorage.setItem("token",res.data.token)
        dispatch({type:"loggedin", data:true})
        

      }else{

        alert(res.data.result)
      }

    }).catch((err)=>{alert(err)});


  }

  return (

    <div id="Loginmain" className='w-25 shadow p-4'>

        <h2>Login Page</h2><br/>
        <label>Username:</label> <br/>
        <input className='form-control' id="username" type="text"/> <br/>
        <label>Password:</label> <br/>
        <input id="password"  className='form-control' type="password" /> <br/>

        <div style={{textAlign:"center"}}>
            <button className='btn w-100' style={{backgroundColor:"rgb(5, 143, 5)", color:"white"}} onClick={fnlogin}>Login</button> <br/> <br/>
            <Link to="/registration"><h5 className='link-primary'>New user?Register here</h5></Link>
       
        </div>
        
      
    </div>

  )

}

export default Login
