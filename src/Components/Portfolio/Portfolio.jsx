import code1 from '../../assets/code_plot1.png';
import plot from '../../assets/plot1.png';
import crop from '../../assets/crop.jpg';
import './Portfolio.css';

function Portfolio() {
    const openPortfolio = () => {
        window.open("https://s3geo.vercel.app/#/", "_blank");
    };

    return (
        <div className="portfolio">
            <div className="portfolio-header">
                <h1>
                    <button className="portfolio-btn" onClick={openPortfolio}>
                        <span className="external-icon">↗</span>
                        View My web Portfolio
                    </button>
                </h1>
            </div>

            {/* Project 1 */}
            <div className='task'>
                <img className="img-port" src={code1} alt='Code visualization for automated scale selection' />
                <div className="task-content">
                    <h2 className="cli">Click the map below to access portfolio dashboard</h2>
                    <h2>Project1:<br></br> Automated Scale Selection for Dynamic Map Rendering</h2>
                    <p className="project-description">
                        This system intelligently selects optimal map scales based on spatial data characteristics 
                        and display parameters, ensuring optimal visualization across different devices and zoom levels.
                    </p>
                    <img 
                        onClick={openPortfolio} 
                        className="img-port1" 
                        src={plot} 
                        alt='Interactive portfolio dashboard preview'
                    />
                </div>
            </div>

            {/* Project 2 */}
            <div className='task'>
                <div className="task-content">
                    <h2>
                        <span className="icon satellite-icon">Project:2 <br></br></span>
                        Spatial-Temporal Image Fusion for Enhanced Crop Water Stress Analysis
                    </h2>
                    <p className="project-description">
                        Advanced remote sensing technique that combines high-temporal resolution with high-spatial 
                        resolution imagery to improve the accuracy of Crop Water Stress Index (CWSI) monitoring 
                        and precision agriculture applications.
                    </p>
                </div>
                <img 
                    className="img-port" 
                    src={crop} 
                    alt='Crop water stress analysis using spatial-temporal fusion'
                />
            </div>

            {/* Additional Project */}
            <div className='task'>
                <img className="img-port" src={plot} alt='Additional project' />
                <div className="task-content">
                    <h2>
                        <span className="icon map-icon">📍</span>
                        Geospatial Data Visualization Platform
                    </h2>
                    <p className="project-description">
                        Interactive web-based platform for visualizing and analyzing complex geospatial datasets 
                        with real-time processing and dynamic filtering capabilities.
                    </p>
                    <button className="portfolio-btn" onClick={openPortfolio}>
                        <span className="external-icon">↗</span>
                        Explore Platform
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;