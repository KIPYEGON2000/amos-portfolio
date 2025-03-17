import profile from './assets/WIN_20240303_10_16_45_Pro.jpg'
import { useState,useEffect } from 'react';

function Card({name="Guest",description="am just here"}){
    const aple={"name":"amos",
        "age":30,
        "course":"GIS"
    }
    const [count,setCount]=useState(0)
    const [hasLiked,setHasLiked]=useState(false);
    useEffect(()=>{
        console.log(`${name} has been liked: ${hasLiked}`)
    });
    
    
return(
   
    
    <div className="card" onClick={()=>setCount(hasLiked? count-1:count+1)}>
        
        <img src={profile} alt="Profile pic" className='img'></img>
        <h2 className='card-title'> {name}<br/>{count}</h2>
        <p>{description}</p>
        <button onClick={ ()=> setHasLiked(!hasLiked)}>
            {hasLiked ? 'Liked':'Like'}
        </button>

    </div>
);
}

export default Card