import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
function App() {
  return(
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Price />}></Route>
          <Route path="/currencies" element={<Currencies />}></Route>
          <Route path="/price" element={<Price />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
