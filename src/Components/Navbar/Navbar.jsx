import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

function Navbar(){
    const [navColor,navBack]=useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50 ? navBack(true):navBack(false);
        }),[]
    })
    const [mobileMenu,setMobile]=useState(false);
    const toggleMenu=()=>{
        mobileMenu?setMobile(false):setMobile(true)

    }
    return(
        <nav className={`container ${navColor? 'dark-color':''}`}>
            <img className="logo" src={logo} alt="" />
            <h1 className="name">KIPYEGON AMOS</h1>
            {/* <img onClick={toggleMenu} className="logo1" src={logo} alt=""/> */}
            
            <img onClick={() => navigate("/")} className="logo1" src={logo} alt=""/>
           
          
            
           
                        {/* <ul className={mobileMenu? '':'hide-mobile'}> */}
                        <ul>
                        
             
                <li>
                <button className="btn1"><Link to="/">Home</Link></button>
                </li>
                <li>
                <button className="btn1"><Link to="/Hero">About</Link></button>
                </li>
                <li>
                    <button className="btn1"><Link to="/Experince">Experience</Link></button>
                    
                    </li>
                <li>
                    <button className="btn1"><Link to="/Education">Education</Link></button>
                    
                    </li>
                <li>
                <button className="btn1"> <Link to="/Contact">contact</Link></button>
                    
                    </li>
                <li><button className="btn1"><Link to="/Portfolio">Portfolio</Link></button></li>
                

            </ul>
           
            

        </nav>
 
    );

}
export default Navbar