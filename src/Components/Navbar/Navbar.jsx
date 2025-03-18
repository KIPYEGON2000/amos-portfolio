import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
function Navbar(){
    const [navColor,navBack]=useState(false)
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
            <h1>KIPYEGON AMOS</h1>
            <img onClick={toggleMenu} className="logo1" src={logo} alt=""/>
           
          
            
           
                        <ul className={mobileMenu? '':'hide-mobile'}>
                        
             
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Hero">About</Link>
                </li>
                <li>
                    <Link to="/Education">Education</Link>
                    
                    </li>
                <li>
                    <Link to="/Contact">contact</Link>
                    
                    </li>
                <li><button className="btn">Testimonities</button></li>
                

            </ul>
           
            

        </nav>
 
    );

}
export default Navbar