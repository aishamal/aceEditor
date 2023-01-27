import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import Pop from "./pop.js";

ReactDOM.render(
 // <Pop/>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
