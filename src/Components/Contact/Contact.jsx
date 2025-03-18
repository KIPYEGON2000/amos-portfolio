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
    const whatsapplLink =()=>{
        window.open("https://wa.me/254742547320" ,"_blank")
    }
    return(
        <div className="contact">
            <h2>Personal Details </h2>
<ol>
    <div className="date">please feel free to contact me on email,whatsApp or linkedIn
        </div>
<div>
Phone Number: (+254) 742547320 <br></br>
 kiptoamos@gmail.com <br></br>


</div>

</ol>
<div className="img1">
<h3>LinkedIn:</h3> 


                <img onClick={linkedinLink} className="cont" src={Linkedin} alt="Linkedin Profile" width="100" />
            
            <h3>Email Address:</h3>

<img onClick={mailLink} className="cont"  src={mail} alt="Mail" width="100" />

</div>
<div className="img2">
<h3>WhatsApp:</h3>
<img onClick={whatsapplLink} className="cont"  src={watsap} alt="Whatsapp" width="100" />
  


</div>

        </div>
      
    );

}
export default Contact