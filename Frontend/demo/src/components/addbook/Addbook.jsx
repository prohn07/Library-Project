import React from "react";
import "./Addbook.css";
import axios from "axios";
import { axiosAuth } from "../../utils/axios";

function Addbook() {
  function fnaddbook() {
    var Title = document.querySelector("#title").value;

    var Author = document.querySelector("#author").value;

    var Description = document.querySelector("#description").value;

    var token = localStorage.getItem("token");

    if (!Title || !Author || !Description) {
      alert("please enter all fields");
    } else {
      var newbook = {
        Title: Title,
        Author: Author,
        Description: Description,
      };

      console.log(token);

      axiosAuth
        .post("/book/newbook", newbook)
        .then((res) => {
          if (res.data.ok) {
            alert(res.data.result);
          } else {
            alert(res.data.result);
          }

          document.querySelector("#title").value = null;
          document.querySelector("#author").value = null;
          document.querySelector("#description").value = null;
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div>
      <div className="modal fade" id="addmodalcontainer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div id="h2div">
                <h2>Add New Book</h2>
              </div>
            </div>

            <div className="modal-body">
              <label>Title</label>
              <br />
              <input id="title" className="form-control" type="text" />
              <br />

              <label>Author</label>
              <br />
              <input id="author" className="form-control" type="text" />
              <br />

              <label>Description</label>
              <br />
              <textarea
                id="description"
                className="form-control"
                rows="4"
                cols="20"
              ></textarea>
              <br />
            </div>

            <div className="modal-footer">
              <button
                onClick={fnaddbook}
                className="btn w-100"
                style={{ backgroundColor: "rgb(5, 143, 5)", color: "white" }}
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addbook;
