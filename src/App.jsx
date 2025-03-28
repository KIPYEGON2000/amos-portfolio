import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Header from "./Header"

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Experince from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  return(

    <Router>
    <Navbar/>


    
    <Routes>
        <Route exact path="/" element={<Home />} />
       
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route
            path="/Experince"
            element={<Experince/>}
        />
        
        <Route
            path="/Education"
            element={<Education/>}
        />
         <Route path="/Portfolio" element={<Portfolio/>}/>
    </Routes>
    
</Router>
);



}

export default App
