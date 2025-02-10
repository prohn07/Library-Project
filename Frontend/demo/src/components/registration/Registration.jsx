import React from "react";
import("./registration.css");
import { Link } from "react-router-dom";
import { axiosNoAuth } from "../../utils/axios";
import { useState, useEffect } from "react";

function Registration() {
  var [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    fullname: "",
  });

  function fnpost() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var email = document.querySelector("#email").value;
    var name = document.querySelector("#name").value;

    if (!username || !password || !email || !name) {
      alert("please enter all fields");
    } else {
      var data = {
        username: username,
        password: password,
        email: email,
        name: name,
      };

      axiosNoAuth
        .post("/user/newuser", data)
        .then((res) => {
          alert(res.data.result);
        })
        .catch((err) => {
          alert(err.message);
        });

      document.querySelector("#username").value = null;
      document.querySelector("#password").value = null;
      document.querySelector("#email").value = null;
      document.querySelector("#name").value = null;
    }
  }

  return (
    <div id="Registrationmaindiv" className="w-25 shadow p-4">
      <h2>Registration</h2>
      <br />
      <label>Username:</label> <br />
      <input className="form-control" id="username" required type="text" />{" "}
      <br />
      <label>Password:</label> <br />
      <input
        className="form-control"
        id="password"
        required
        type="password"
      />{" "}
      <br />
      <label>Email:</label> <br />
      <input className="form-control" id="email" required type="email" /> <br />
      <label>Full Name:</label> <br />
      <input className="form-control" id="name" required type="text" /> <br />
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-primary w-100" onClick={fnpost}>
          Register
        </button>{" "}
        <br />
        <br />
        <Link to="/">
          <h5 className="link">Already have an account?Login here</h5>
        </Link>
      </div>
    </div>
  );
}

export default Registration;
