import {useState, useEffect} from 'react'
import "./Bookdetail.css"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Bookdetail() {

    var [statedetail, setdetail] = useState({});

    var {id} = useParams();

    useEffect(()=>{

        axios.get(`http://localhost:8888/book/getbookdetail/${id}/${localStorage.getItem("token")}`).then((res)=>{
              
            if(res.data.ok) {

                setdetail(res.data.result[0]);

            }else {

                alert(res.data.result);

            }

        }).catch((err)=>{alert(err)});
    });

    

  return (

    <div>

        <table className='table table-bordered m-auto mt-5 shadow w-50'>

            <thead>
                <tr>
                    <th>Book Details</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>Book Id</td>
                    <td>{statedetail._id}</td>
                </tr>

                <tr>
                    <td>Title</td>
                    <td>{statedetail.Title}</td>
                </tr>

                <tr>
                    <td>Author</td>
                    <td>{statedetail.Author}</td>
                </tr>

                <tr>
                    <td>Description</td>
                    <td>{statedetail.Description}</td>
                </tr>

            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={2}>
                       <Link to="/booklist" ><button className='btn btn-outline-primary w-100'>Back to Book List</button></Link> 
                    </td>
                </tr>
            </tfoot>

        </table>
      
    </div>

  )
}

export default Bookdetail;
