import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "right" }}>
      <button
        className="btn btn-danger btn-lg m-3"
        onClick={() => {
          localStorage.removeItem("token");

          dispatch({
            type: "loggedout",
            data: false,
          });

          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Nav;
