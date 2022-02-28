import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router


//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <React.StrictMode>
      <App />
 
  </React.StrictMode>,
  document.getElementById("root")
);