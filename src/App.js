import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="app"> 
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></> }></Route>
        
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
