import React from "react";
import './Home.css'
import About from "../../Components/About/About";
import class_image from '../../assets/class.jpg'
import pasport from '../../assets/pasport.jpg'
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function Home(){
    return(
    <main><div className="home1">
       
        <div className="home-container">
        <div className="home-text">
            <div className="log">
            <img className="classImg" src={pasport} alt="image"></img>

            </div>
            <h1>Kipyegon Amos</h1>
            <div>
            Hello! Welcome to my portfolio. 
            am  Geographic Information Science Proffesional and I enjoy all things GIS, <br></br>
            remote sensing, and automation of task using programming. <br></br>
            This portfolio features my professional work and experiences.
            </div>
            </div>
            <div>
                <img className="class-image" src={class_image} alt="image"></img>

            
            </div>
            
           
           
           
        </div>
        <About/>
    
             
     
    
        </div>
        </main>
         
          

   
    );

}
export default Home