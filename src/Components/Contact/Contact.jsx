import React from "react";
import './Contact.css'
import Linkedin from '../../assets/linkendin.png'
import mail from '../../assets/mail.jpeg'
function Contact(){
    return(
        <div className="contact">
            <h2>Personal Details </h2>
<ol>
    <div className="date">Date of Birth
        25/06/2000 
        </div>
<div>
Phone Number: (+254) 742547320 <br></br>
 kiptoamos@gmail.com <br></br>


</div>

</ol>
<div className="img1">
<h3>LinkedIn:</h3> 

<a href="linkedin.com/in/kipyegon-amos-287a2a1a3" target="_blank" rel="noopener noreferrer">
                <img className="cont" src={Linkedin} alt="Linkedin Profile" width="100" />
            </a>
            <h3>Email Address:</h3>
<a href="kiptoamos@gmail.com" target="_blank" rel="noopener noreferrer">
<img className="cont"  src={mail} alt="Mail" width="100" />
            </a>

</div>

        </div>
      
    );

}
export default Contact