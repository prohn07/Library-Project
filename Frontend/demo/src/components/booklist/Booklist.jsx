import { useEffect, useState } from "react";
import "./Booklist.css";
import { axiosAuth } from "../../utils/axios";
import { Link } from "react-router-dom";

function Booklist() {
  var [state, setState] = useState([]);

  useEffect(() => {
    axiosAuth
      .get("/book/getbook")
      .then((res) => {
        if (res.data.ok) {
          setState(res.data.result);
        } else {
          alert(res.data.result);
        }
      })
      .catch((err) => {
        alert(err);
      });
  });

  function fnremove(id) {
    axiosAuth
      .delete(`http://localhost:8888/book/deletebook/${id}`)
      .then((res) => {
        if (res.data.ok) {
          alert(res.data.result);
        } else {
          alert(res.data.result);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <table className="table table-striped table-bordered w-50 align-middle m-auto my-5 ">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th colSpan={3}>Author</th>
          </tr>
        </thead>

        <tbody>
          {state.map((element, index) => {
            var id = element._id;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <h6>{element.Title}</h6>
                </td>
                <td>
                  <h6>{element.Author}</h6>
                </td>
                <td>
                  <Link to={`/bookdetail/${id}`}>
                    <button className="btn btn-primary w-100">Details</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      fnremove(element._id);
                    }}
                    className="btn btn-danger w-100"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5}>
              <Link to="/">
                <button className="btn btn-outline-secondary w-100">
                  Return to Home Page
                </button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Booklist;
