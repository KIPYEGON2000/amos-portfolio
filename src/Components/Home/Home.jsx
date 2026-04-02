import React from "react";
import './Home.css';
import About from "../../Components/About/About";
import class_image from '../../assets/class.jpg';
import pasport from '../../assets/pasport.jpg';
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();

    const scrollToContact = () => {
        document.getElementById('contact-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    return (
        <main>
            <section className="home-hero" id="home">
                <div className="hero-content">
                    <div className="profile-image-container">
                        <img 
                            className="profile-img" 
                            src={pasport} 
                            alt="Kipyegon Amos - GIS Professional"
                        />
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-name">Kipyegon Amos</h1>
                        <h2 className="hero-title">
                            Geographic Information Science Professional
                        </h2>
                        
                        <p className="hero-description">
                            Welcome to my professional portfolio! I'm passionate about transforming 
                            spatial data into meaningful insights through GIS, remote sensing, and 
                            automated solutions. I specialize in creating innovative geospatial 
                            applications that solve real-world problems.
                        </p>

                        <div className="hero-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">▸</span>
                                GIS Development & Analysis
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">▸</span>
                                Remote Sensing & Image Processing
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">▸</span>
                                Python Automation & Scripting
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">▸</span>
                                Web Mapping Applications
                            </div>
                        </div>

                        <div className="cta-buttons">
                            <button 
                                className="cta-btn cta-primary" 
                                onClick={() => navigate("/Portfolio")}
                            >
                                View My Work
                            </button>
                            <button 
                                className="cta-btn cta-secondary" 
                                onClick={scrollToContact}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                                     <div className="profile-image-container">
                        <img 
                            className="profile-img1" 
                            src={class_image} 
                            alt="my Theisis"
                        />
                    </div>

                    
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* About Section */}
            {/* <section id="about-section">
                <About />
            </section> */}

            {/* Contact Section */}
            <section id="contact-section">
                <Contact />
            </section>

            <Footer />
        </main>
    );
}

export default Home;