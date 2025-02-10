import React from 'react'
import "./LibraryCatalog.css"
import { Link } from 'react-router-dom'
import Addbook from '../addbook/Addbook'
import Updatebook from '../updatebook/Updatebook'

function LibraryCatalog() {
  

  return (

    <div id="Libmaindiv">

      <div id="linkdiv">

        <h2>Welcome to the Library Catalog</h2>
        <br/>

        <Link style={{textDecoration:"none", color:"red"}} data-bs-toggle="modal" data-bs-target="#addmodalcontainer">Add New Book</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{textDecoration:"none", color:"red"}} to="/booklist">Book List</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link style={{textDecoration:"none", color:"red"}} data-bs-toggle="modal" data-bs-target="#updatemodalcontainer">Update Book</Link>
        

      </div><br/>
        
        <h5>xplore our catalog and manage your books effectively. use the navigation links to perform various actions.</h5> <br/>

        <Addbook/>
        <Updatebook/>

        <div className='carousel slide' data-bs-ride="carousel" id="catalogdiv">

             <div className='carousel-inner' >

              <div className='carousel-item active' data-bs-interval="3000">

                <img height={"600px"} width={"100%"} src='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D'/>

              </div>

              <div className='carousel-item' data-bs-interval="3000">
                   
                <img height={"600px"} width={"100%"} src="https://media.istockphoto.com/id/1498878143/photo/book-stack-and-open-book-on-the-desk-in-modern-public-library.webp?b=1&s=612x612&w=0&k=20&c=VNyPBKIS8zq_58gLSa3fnpHq1DRVvjdZHzW4fGPcIb8="/>

              </div>

              <div className='carousel-item' data-bs-interval="3000">

              <img height={"600px"} width={"100%"} src="https://media.istockphoto.com/id/505551939/photo/library.jpg?s=612x612&w=0&k=20&c=lGwjpaVR2__plgaEeRiLZ0n1up16Zm3PW6zlR4paabI="/>

              </div>

             </div>

             <button className='carousel-control-prev' data-bs-target="#catalogdiv" data-bs-slide="prev">
              <span className='carousel-control-prev-icon'></span>
             </button>

             <button className='carousel-control-next' data-bs-target="#catalogdiv" data-bs-slide="next">
              <span className='carousel-control-next-icon'></span>
             </button>

        </div>
      
    </div>
  )
}

export default LibraryCatalog
