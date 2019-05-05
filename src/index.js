import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const json = require("./resume.json");

ReactDOM.render(
  <BrowserRouter>
    <App resumeJson={json} />
  </BrowserRouter>,
  document.getElementById("root")
);
