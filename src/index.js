import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

const RootNode = (
  <BrowserRouter basename='/ImIn'>
    <App />
  </BrowserRouter>
);

ReactDOM.render(RootNode, document.getElementById("root"));
registerServiceWorker();
