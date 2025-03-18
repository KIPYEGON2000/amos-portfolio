import React from "react";
import './Hero.css'
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function Hero(){
    return(
        <div className="hero-container">
        <div className="hero container">
        <div className="hero-text">
            <h1>About me</h1>
            <p>
            As a Geospatial Data analyst Assistant at Kenya Power and Limited company, I help process, analyze, 
            and visualize geospatial data and assess distribution of customers and the state of power meter. i led a team in the GIS Loss Reduction to 
            clean, analyze,and report generation.
            
            </p>
            <p>Motivated, responsible, and innovative GIS Analyst with expertise in geospatial data collection, analysis, 
and visualization. Proficient in GIS software, SQL, Python, and data analytics, with a strong ability to 
present geographic insights effectively. Adept at problem-solving, decision-making, and delivering high
quality results that drive operational efficiency.</p>
<p>
I hope to continue my career in remote sensing, GIS, and task automation. My goal is to increase skills in programming and utilize technology 
  to better understand data and our environment.
</p>
<ol >
    <h2>Core Competencies </h2>
    <li>Programming: Python (Pandas, NumPy, Streamlit), R, C, C++, Google Earth Engine</li>
<li> GIS Map Creation Software: ArcGIS, QGIS, PostGIS, AutoCAD </li>
<li>Remote Sensing and Image Processing Softwares: ERDAS IMAGINE, ENVI, SNAP </li>
<li>Data Analysis & Visualization:  Tableau, Streamlit, Matplotlib, Plotly </li>
<li>Database Management: SQL (PostgreSQL, MySQL) </li>
<li> Web Programming: Basic skills in HTML, CSS, Django, JavaScript for web mapping 
applications</li> 
<li> Operating Systems: Windows, Linux (Ubuntu) – command-line operations and scripting </li>
<li>Land Surveying: Experience using Level, Theodolite, RTK, and GPS for data collection </li>
</ol>
            
        </div>
        </div>
        <Contact/>
        <Footer/>
         
          

        </div>
   
    );

}
export default Hero