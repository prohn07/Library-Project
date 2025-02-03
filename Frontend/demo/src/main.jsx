import ReactDOM from "react-dom";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector("#root"));

ReactDOM.createRoot(document.querySelector("#root")).render(<BrowserRouter><App/></BrowserRouter>);
