import React from 'react'

function Back() {


    function fnpost() {

        if(document.querySelector("#username").value===null) {

            alert("please enter username")


        }else{

             if(document.querySelector("#password").value===null) {

                alert("please enter password")

             }else{

                if(document.querySelector("#email").value===null) {

                    alert("please enter email")

                }else{

                    if(document.querySelector("#name").value===null) {

                        alert("please enter fullname")

                    }else{

                        setState({
                            username:document.querySelector("#username").value,
                            password:document.querySelector("#password").value,
                            email:document.querySelector("#email").value,
                            fullname:document.querySelector("#name").value,
                
                        })
                
                        console.log(state);
                
                        document.querySelector("#username").value = null;
                        document.querySelector("#password").value = null;
                        document.querySelector("#email").value = null;
                        document.querySelector("#name").value = null;
                
                
                    }


                    }


                }


             }

        }














  return (
    <div>
      
    </div>
  )
}

export default Back
