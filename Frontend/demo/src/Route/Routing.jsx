import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { route } from './Route.jsx'
import Login from '../components/login/Login.jsx'
import Registration from '../components/registration/Registration.jsx'
import LibraryCatalog from '../components/librarycatalog/LibraryCatalog.jsx'
import axios from "axios";
import { useSelector } from 'react-redux'


function Routing() {

  var isloggedin = useSelector((source)=>{return source.isloggedin})


  return (
 
        <Routes>

            {route.map((ele, index)=> <Route key={index} path={ele.path} element={isloggedin? ele.element : <Login/>}/>)}
            <Route path={"/"} element={isloggedin? <LibraryCatalog/> : <Login/>}></Route>
            <Route path={"/registration"} element={isloggedin? <LibraryCatalog/> : <Registration/>}></Route>

        </Routes> 

  )
}

export default Routing
