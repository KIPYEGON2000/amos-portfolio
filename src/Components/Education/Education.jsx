import './Education.css'
import primo from '../../assets/primo.jpg'
import seco from '../../assets/seco.jpg'
import campo from '../../assets/campo.jpg'
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function Education(){
    return(
      <div className='education'>
        <h2>Bachelor of Science in Geospatial Information Science</h2>
        <h3 className='tit'>Jomo Kenyatta University of Agriculture and Technology</h3>

        <div className='edu'>

        
            <img src={campo} alt='campo' className='img'></img>
            <div className="caption">

            
            <ul>
                <li>September 2017 – December 2021 </li>
                 <li>Final Grade: Second Class Honors - Upper Division </li>
            </ul>
            </div>
            <div className='caption1'>
            <h3 className='tit'>Relevant modules</h3>
            <ul>
                <li>Geospatial Information Science.</li>
                <li>Remote Sensing.</li>
                <li>Land Survey .</li>
                <li>Cartography.</li>
                <li>Geodesy.</li>
                <li>Statistics and Geostatistics.</li>
                <li>Computer Programming; Python, R, Basics of (C and C++), web programming (HTML,CSS) and web mapping.</li>
                <li>Data science (analysis and vizualization )</li>
            </ul>


            </div>
        </div>
        <h2 className='h2w'>Kenya Certificate of Secondary Education </h2>
        <h3 className='tit'>Lesirwo Secondary School, Kericho </h3>
        <div className='edu'>

            <img src={seco} alt='' className='img'></img>
            <div className="caption">
            
            <ul>
                
                
                    <li>February 2013 – November 2016 </li>
                    <li>Mean grad B.</li>
            </ul>
            </div>

        </div>
        <h2> Kenya Certificate of Primary Education </h2>
        <h3 className='tit'>Kamachungwa Primary School, Kericho </h3>
        <div className='edu'>

            <img src={primo} alt='' className='img'></img>
            <div className="caption">
            
            <ul>
                
                <li>anuary 2004 – November 2012 </li>
                <li>Final Grade: 257 Marks </li>
            </ul>
            </div>
        </div>
        <Contact/>
        <Footer/>

      </div>
    );

}
export default Education