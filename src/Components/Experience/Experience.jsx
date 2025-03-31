import React, { useRef } from "react";
import './Experience.css'
function Experince(){
    const slider=useRef();
    let tx=0
    const nextExp =()=>{
        if(tx>-50){
            tx -=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
           

    }
    const forwardExp =()=>{
        if(tx<0){
            tx +=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
          
           

    }
    return(

        
        <div className="experience">
            <h1>Work experince</h1>
           
            {/* <button className="exp-btn" onClick={forwardExp}>Prev</button>
            <button className="exp-btn-next" onClick={nextExp}>Next</button> */}
            <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">

                        <h3>GIS Analyst Intern → Skilled Casual </h3>
                        <div className="test-date">
                        <h4>Kenya Power and Lighting Company  </h4>
                        <div className="date">November 2023 – February 2025 </div>
                        </div>
                        <ol>
                      <li>•	Analyzed and interpreted spatial data for condition and distribution of meters utilizing GIS programming to provide insight that guided necessary decision making for maximizing profit.</li>
                        <li>•	   Developed custom Scripts using python and SQL to automate data processing and analysis task.</li>
                        <li>•	Engineered and developed interactive dashboards with Streamlit, Python, and SQL.</li>
                        <li>•	Revitalized project GIS database by spearheading query optimization.</li>
                        <li>•	Utilized ArcGIS online to Performed meter data validation and quality control for FDB database accuracy.</li>
                        <li>•	Collaborated with cross-functional team of 11 to deliver complex GIS cleaning and automation.</li>
                        <li>•	Utilized Matplotlib and python Script to generate GIS maps for GIS Loss Reduction Project.</li>
                        <li>•	Utilized field map ESRI software to collect GIS data. </li> 

                        </ol>
                        <h4>Key Achievements: </h4>
                        <li>Developed an interactive performance dashboard integrating GIS and analytics.</li>
                        <li>Strengthened PostgreSQL skills through database management and data transformation.</li>
                        <li>Collaborated Cross-Functional team to analyze spatial data, and Generated maps for project.</li>

                    </div>
                </li>
                <li>
                <div className="slide">
                    <h3>GIS Data Analyst - Skilled Casual </h3>
                    <div className="test-date">
                    <h4>Kenya Power and Lighting Company</h4>
                    <div className="date">May 2023 – November 2023 </div>
                    </div>
                    <ol>
                 <li>•	Engineered data quality control and validation for enhanced database accuracy.</li>
                <li>•	Analyzed and performed geospatial data cleaning to improve analytical reliability.</li>
                <li>•	Verified and corrected feeder and low-voltage line associations.</li>
                <li>•	Collaborated with NYS teams to ensure accurate GIS data collection.</li>
                <li>•	Collected and processed field data, including substations, poles, and meters.  </li> 

                    </ol>
                </div>
                </li>
                 <li>
                 <div className="slide">
                    <h3> GIS Data Collector</h3>
                    <div className="test-date">
                    <h4>Joint National Mapping | Kenya Power and Lighting Company</h4>
                    <div className="date">February 2022 – November 2022</div>
                    </div>
                    <ol>
                    <li>•	Performed field-based GIS data collection of meters, poles, and LV lines.</li>
                    <li>•	Assisted security teams with navigation for power infrastructure maintenance.</li>
                    <li>•	Contributed to revenue collection and reporting workflows.</li>
                    <li>•	Rectified incorrect meter readings and identified faulty meters.</li>

                    </ol>
                </div>
                 </li>
                 <li>
                 <div className="slide">
                    <h3>Survey and Mapping Intern</h3> 
                    <div className="test-date">
                    <h4>Kenya Forest Service </h4>
                    <div className="date">February 2021 – May 2021</div>
                    </div>
                    <ol>
                   <li>•	Conducted boundary surveys at Kodera Forest and Lari Forest using GPS technologies.</li>
                    <li>•	Utilized Remote sensing Technology to monitor the distribution and health of forest.</li>
                    <li>•	Digitized Mau Plantation toposheets for improved geospatial accessibility.</li>
                    <li>•	Performed topographic data collection with RTK and theodolite for mapping accuracy. </li>

                    </ol>
                </div>
                 </li>
            </ul>
            </div>
           

        </div>
    );

}
export default Experince