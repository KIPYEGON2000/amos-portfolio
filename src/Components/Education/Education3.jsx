import './Education.css'


function Education(props){
    
    return(
      <div className='education'>


        <h2 className='h2w'>{props.title}</h2>
        <h3 className='tit'>{props.title2} </h3>
        <div className='edu'>

            <img src={props.image1} alt='' className='img'></img>
            <div className="caption">
            
            <ul>
                
                
                    <li>{props.date}</li>
                    <li>{props.grade}</li>
            </ul>
            </div>

        </div>
        
 
      </div>
    );

}
export default Education