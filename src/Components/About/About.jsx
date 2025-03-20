import React from "react";
import './About.css'
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function About(){
    const navigate = useNavigate();
    return(
        <div className="about">
        <div className="about-text">
            <h1>About me</h1>
            <p>Hi! My name is Kipyegon Amos, and I am a GIS and Remote Sensing Analyst
                 I enjoy all things relating to automation of task, environmental science and using technology to better understand our planet.</p>
        

</div>
<button className= "btn" onClick={() => navigate("/Hero")}>More...</button>
<Contact/>
<Footer/>
</div>
   
);

}
export default About