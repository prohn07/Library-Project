
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import Registration from './components/registration/Registration'

function App() {

  return (

   

    <div>
 
      <Routes>

        <Route path={"/"} element={<Login/>} />
        <Route path={"/registration"} element={<Registration/>} />

      </Routes>
      
    </div>
  )
}

export default App
