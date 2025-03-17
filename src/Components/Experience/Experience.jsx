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
           
            {/* <button className="exp-btn" onClick={forwardExp}>Prev</button>
            <button className="exp-btn-next" onClick={nextExp}>Next</button> */}
            <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <h3>GIS Analyst Intern → Skilled Casual </h3>
                        <h4>Kenya Power and Lighting Company  </h4>
                        <div className="date">November 2023 – February 2025 </div>
                        <li>Conducted geospatial data analysis using Python and SQL to provide actionable insights. </li> 
                        <li>Designed and developed interactive dashboards with Streamlit, Python, and SQL. </li> 
                        <li>Assisted in SQL database management, query optimization, and data migration. </li> 
                        <li>Performed meter data validation and quality control for FDB database accuracy. </li> 
                        <li>Led GIS data cleaning for feeder and power line networks using Python automation. </li> 
                        <li>Developed GIS maps for Phase III and IV of the GIS Loss Reduction Project. </li> 
                        <li>Conducted Field data collection</li>
                        <h4>Key Achievements: </h4>
                        <li>Successfully developed an interactive performance dashboard integrating GIS and analytics.</li>  
                        <li> Strengthened PostgreSQL skills through database management and data transformation. </li> 
                        <li>Led GIS data quality improvement initiatives, ensuring high accuracy standards and Data collection</li>
                    </div>
                </li>
                <li>
                <div className="slide">
                    <h3>GIS Data Analyst - Skilled Casual </h3>
                    <h4>Kenya Power and Lighting Company</h4>
                    <h4>May 2023 – November 2023 </h4>
                    <li>Conducted GIS data quality control and validation for enhanced database accuracy.</li>
                    <li>Led geospatial data cleaning efforts to improve analytical reliability.</li>
                    <li>Verified and corrected feeder and low-voltage line associations.</li>
                    <li>Supervised NYS teams to ensure accurate GIS data collection.</li>
                    <li>Collected and processed field data, including substations, poles, and meters.</li>
                </div>
                </li>
                 <li>
                 <div className="slide">
                    <h3> GIS Data Collector</h3>
                    <h4>Joint National Mapping | Kenya Power and Lighting Company</h4>
                    <h4>February 2022 – November 2022</h4>
                    <li>Performed field-based GIS data collection of meters, poles, and LV lines.</li>
                    <li>Assisted security teams with navigation for power infrastructure maintenance.</li>
                    <li>Contributed to revenue collection and reporting workflows.</li>
                    <li>Rectified incorrect meter readings and identified faulty meters.</li>
                </div>
                 </li>
                 <li>
                 <div className="slide">
                    <h3>Survey and Mapping Intern</h3> 
                    <h4>Kenya Forest Service </h4>
                    <h4>February 2021 – May 2021</h4>
                    <li>Conducted boundary surveys at Kodera Forest and Lari Forest using GPS technologies.</li>
                    <li>Digitized Mau Plantation toposheets for improved geospatial accessibility.</li>
                    <li>Performed topographic data collection with RTK and theodolite for mapping accuracy.</li>
                </div>
                 </li>
            </ul>
            </div>
           

        </div>
    );

}
export default Experince