import React from 'react'
import "./updatebook.css"
import axios from 'axios';

function Updatebook() {

  function fnupdatebook() {

    if(document.querySelector("#bookid").value==="") {

      alert("Please enter Book ID");

    }else if(document.querySelector("#title1").value==="") {

      alert("Please enter Title field");

    }else if(document.querySelector("#author1").value==="") {

      alert("Please enter Author field");

    }else if(document.querySelector("#description1").value==="") {

      alert("Please enter description");

    }else{

      var updatedbookdata = {

        id: document.querySelector("#bookid").value,
        Title: document.querySelector("#title1").value,
        Author: document.querySelector("#author1").value,
        Description: document.querySelector("#description1").value,
        token: localStorage.getItem("token")

      }

      axios.put("http://localhost:8888/book/updatebook", updatedbookdata).then((res)=>{

        if(res.data.ok) {

          alert(res.data.result);

        }else {
            
            alert(res.data.result)
        }

      }).catch((err)=>{alert(err)})

    }

        document.querySelector("#bookid").value = null;
        document.querySelector("#title1").value = null;
        document.querySelector("#author1").value = null;
        document.querySelector("#description1").value = null;
        


  }

  return (


    <div>

    <div className='modal fade' id="updatemodalcontainer">

      <div className='modal-dialog modal-dialog-centered'>

        <div className='modal-content'>


          <div className='modal-header'>

          <div id="h2div"><h2>Update Book</h2></div>

          </div>


          <div className='modal-body'>

          <label>Book ID:</label><br/>
          <input id="bookid" className='form-control' type="text" /><br/>

          <label>Title</label><br/>
         <input id="title1" className='form-control' type="text" /><br/>

         <label>Author</label><br/>
         <input id="author1" className='form-control' type="text" /><br/>

         <label>Description</label><br/>
         <textarea id="description1" className='form-control' rows="4" cols="20"></textarea><br/>


          </div>



          <div className='modal-footer'>
             
          <button onClick={fnupdatebook} className='btn w-100' style={{backgroundColor:"rgb(5, 143, 5)", color:"white"}} >Update Book</button>

          </div>



        </div>

      </div>

    </div>

    </div>
     
      
    
  )
}

export default Updatebook
