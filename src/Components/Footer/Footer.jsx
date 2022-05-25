import React from "react";

import "./footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Footer = ()=>{
    return (

        <div className="footer" > 
        <a className="footer-icon" href="tel:+918619443934"><CallIcon style={{color:"white",fontSize:"30px",borderRadius:" 2px"}}/></a>
        <a className="footer-icon" href="https://www.instagram.com/accounts/login/?next=/gurpyardandiwal/"><InstagramIcon style={{color:"white",fontSize:"30px",borderRadius:" 2px"}}/></a>
        
        <a className="footer-icon" href="https://stackoverflow.com/users/16723550/gurpyar"><QuestionAnswerIcon  style={{color:"white",fontSize:"30px",borderRadius:" 2px"}}/></a>
        
        </div>
        
    )
}

export default Footer;