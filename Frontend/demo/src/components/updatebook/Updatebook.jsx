import React from "react";
import "./updatebook.css";
import axios from "axios";
import { axiosAuth } from "../../utils/axios";

function Updatebook() {
  function fnupdatebook() {
    var id = document.querySelector("#bookid").value;
    var Title = document.querySelector("#title1").value;
    var Author = document.querySelector("#author1").value;
    var Description = document.querySelector("#description1").value;

    if (!id || !Title || !Author || !Description) {
      alert("Please enter all fileds");
    } else {
      var updatedbookdata = {
        id: id,
        Title: Title,
        Author: Author,
        Description: Description,
      };

      axiosAuth
        .put("/book/updatebook", updatedbookdata)
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

    document.querySelector("#bookid").value = null;
    document.querySelector("#title1").value = null;
    document.querySelector("#author1").value = null;
    document.querySelector("#description1").value = null;
  }

  return (
    <div>
      <div className="modal fade" id="updatemodalcontainer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div id="h2div">
                <h2>Update Book</h2>
              </div>
            </div>

            <div className="modal-body">
              <label>Book ID:</label>
              <br />
              <input id="bookid" className="form-control" type="text" />
              <br />

              <label>Title</label>
              <br />
              <input id="title1" className="form-control" type="text" />
              <br />

              <label>Author</label>
              <br />
              <input id="author1" className="form-control" type="text" />
              <br />

              <label>Description</label>
              <br />
              <textarea
                id="description1"
                className="form-control"
                rows="4"
                cols="20"
              ></textarea>
              <br />
            </div>

            <div className="modal-footer">
              <button
                onClick={fnupdatebook}
                className="btn w-100"
                style={{ backgroundColor: "rgb(5, 143, 5)", color: "white" }}
              >
                Update Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatebook;
