import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routing from "./Route/Routing.JSX";
import { axiosAuth } from "./utils/axios";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/nav/Nav";

function App() {
  const [logged, setLogged] = useState(true);

  const dispatch = useDispatch();

  const isloggedin = useSelector((source) => {
    return source.isloggedin;
  });

  useEffect(() => {
    axiosAuth
      .get("/user/authenticate")
      .then((res) => {
        if (res.data === "success") {
          dispatch({
            type: "loggedin",
            data: true,
          });
        }

        setLogged(false);
      })
      .catch((err) => {});
  }, []);

  if (logged) {
    return <div></div>;
  }

  return (
    <div>
      {isloggedin ? <Nav /> : null}

      <Routing />
    </div>
  );
}

export default App;
