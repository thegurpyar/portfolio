import React from "react";
import "./portfolio.css";
import { Container,Row,Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const PortFolio = ()=>{

    return(
        <div id="portfolio" >
     

        <Container fluid >
        <Row >
            <Col lg={6} xs={12} sm={12} md={12}>
            
            
            <div className="portfolio" >
            <div className="round-image"></div>

                
                <p>I'm a Full-Stack Web Developer from <span> </span>
                    <a href="https://www.google.co.in/maps/place/Sri+Ganganagar,+Rajasthan+335001/@29.9091728,73.8440324,13z/data=!3m1!4b1!4m5!3m4!1s0x3917b513d6964015:0xb54a4cb83b8f319b!8m2!3d29.9093759!4d73.8799805">
                    Sriganganagar,Rajasthan.
                    </a>
                    
                    </p>
                    <p>I love to create awesome websites.</p>
                    <p>
                    <a href="#contact" style={{color:"rgb(4, 194, 201)"}}>Let's make something special.</a></p>
                
            </div>

            </Col>
            
            <Col lg={6} xs={12} sm={12} md={12}>
      
            <Fade cascade duration="200">
            <p style={{marginTop:"60px"}}>HTML</p>
            
            <div className="container">

                <div className="skills html">90%</div>

           
            </div>


            <p style={{marginTop:"10px"}}>CSS</p>
            <div className="container">
                 <div className="skills css">80%</div>
            </div>

            
            <p style={{marginTop:"10px"}}>JavaScript</p>
                <div className="container">
            <div className="skills js">75%</div>
            </div>

            <p style={{marginTop:"10px"}}>NodeJs</p>
            <div className="container">
                <div className="skills node">85%</div>
            </div>

            <p style={{marginTop:"10px"}}>ReactJs</p>
            <div className="container">
                <div className="skills react">80%</div>
            </div>

            <p style={{marginTop:"10px"}}>Mongodb</p>
            <div className="container">
                <div className="skills node">85%</div>
            </div>

            <p style={{marginTop:"10px"}}>Python</p>
            <div className="container" >
                <div className="skills python">80%</div>
            </div>


            
            </Fade>

           
            </Col>
            

        </Row>
            </Container>
       
        </div>
    )
}

export default PortFolio;