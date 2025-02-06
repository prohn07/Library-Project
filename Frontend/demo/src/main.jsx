import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import myStore from "./Redux/store.js";

// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector("#root"));

ReactDOM.createRoot(document.querySelector("#root")).render(<Provider store={myStore}><BrowserRouter><App/></BrowserRouter></Provider>);
