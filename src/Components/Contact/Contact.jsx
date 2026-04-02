import React from "react";
import './Contact.css'
import Linkedin from '../../assets/linkendin.png'
import mail from '../../assets/mail.jpeg'
import watsap from '../../assets/whatsapp.jpeg'
function Contact(){
    const linkedinLink =()=>{
        window.open("https://www.linkedin.com/in/kipyegon-amos-287a2a1a3/","_blank")
    }
    const mailLink =()=>{
        window.open("mailto:kiptoamos@gmail.com","_blank")
    }
  
    return(
        <div className="contact">
            <h2>Personal Details </h2>
<ol>
    <div className="date">please feel free to contact me on email,whatsApp or linkedIn
        </div>
<div>
Phone Number: (+254) ...... <br></br>
 kiptoamos@gmail.com <br></br>


</div>

</ol>
<div className="conta">

<h4>LinkedIn:</h4> 


                <img onClick={linkedinLink} className="cont" src={Linkedin} alt="Linkedin Profile" />
            
            <h4>Email Address:</h4>

<img onClick={mailLink} className="cont"  src={mail} alt="Mail" />



</div>

        </div>
      
    );

}
export default Contact