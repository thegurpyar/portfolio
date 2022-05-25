import React,{useRef} from "react";
import "./contact.css";
import { Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';



import {Bounce} from "react-awesome-reveal"
const Contact = ()=>{

    const form = useRef();
    
    const sendEmail = (e) => {
        
      e.preventDefault();
      emailjs.sendForm('service_a325vqw', 'template_5ut5czg', form.current, 'Tm-An3NfFB76_uKXx')
      .then((result) => {
          console.log(result.text)
          
         
      }, (error) => {
          console.log(error.text);
      });
      
        
       
        e.target.reset()
    };


    return (
        <div id="contact" >
        <Container fluid  style={{padding:"0",margin:"0",background:"white"}}>
            <div style={{background:"#252934",marginTop:"50px"}} className="contact">
                <Bounce duration="1000">
                <h1 className="header" style={{color:"#fff",marginTop:"-5%"}}>CONTACT</h1></Bounce>
                <p style={{color:"rgb(4, 194, 201)",fontWeight:"600"}}>Have a question or want to work together?</p>
                
                <form onSubmit={sendEmail}  ref={form}>
                <input type="text" 
                placeholder="Name" name="name" required={true}/>
                <input type="email" 
                placeholder="Email" name="email" required={true}/>


                <textarea  id="" cols="60" rows="10"placeholder="Your Message" 
                name="message" required={true}  />
                
                <button type="submit" className="btn btn-outline-light"
                style={{width:"auto",margin:"20px auto",textTransform:"uppercase"}}
                
                
                >Submit</button>

                </form>
           
            </div>
        </Container>

        </div>
    )
}

export default Contact