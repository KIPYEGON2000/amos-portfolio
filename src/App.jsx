import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Card from "./Card";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Experince from "./Components/Experience/Experience";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
function App() {
  return(

    <Router>
    <Navbar/>
    
    <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />
        <Route
            path="/Experince"
            element={<Experince />}
        />
        {/* <Route path="/About" element={<About />} /> */}
        <Route
            path="/Education"
            element={<Education />}
        />
    </Routes>
    <About/>
</Router>
);



  //   <>
  //   <div>
  //   <Navbar/>
  //   <Hero/>
  //   <div className="container">
  //   <Experince/>
  //   <Education/>
  //   <About/>
    

  //   </div>
    

  //   </div>


  //   </>
  // );

}

export default App
