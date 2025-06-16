import Map from "../../Components/Map/Map"
import code1 from '../../assets/code_plot1.png'
import plot from '../../assets/plot.png'
import crop from '../../assets/crop.jpg'
import './Portfolio.css'
// import Map from '../Navbar/Map/Map'
function Portfolio(){
    const portfo =()=>{
        window.open("https://geo-dashboad-8.onrender.com/","_blank")
    }
    return(
        <div className="portfolio">
            <h1><button className= "btn" onClick={() => portfo()}>My portfolio</button></h1>
            <div className="map1">
                <Map/>
            </div>
            
            <div className='task'>
                
                <img className="img-port" src={code1} alt=''></img>
                <div>
                    <h2>The code automatically choose a scale based on the size of map</h2>
                <img onClick={portfo} className="img-port1" src={plot} alt=''></img>
                </div>
            
               
            </div>
            <div className='task'>
            <div><h2>Using spatial temporal image fusion<br></br> to improve spatial resolution of crop water stres index</h2>

                <img className="img-port" src={crop} alt=''></img>
                </div>
               
            </div>

        


        </div>
 
    );

}
export default Portfolio