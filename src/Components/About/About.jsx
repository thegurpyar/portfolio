import React from "react";
import "./about.css";
import { Container,Row,Col } from "react-bootstrap";
import HexagonIcon from '@mui/icons-material/Hexagon';
import SpeedIcon from '@mui/icons-material/Speed';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {Slide,Fade} from "react-awesome-reveal";
const About = ()=>{
    const style={
        color:"#04c2c9",
        fontSize:"150px",
        
    }
    const iconStyle={
        display:"block",
        position:"relative",
        fontSize:"50px",
        marginLeft:"auto",
        marginRight:"auto",
        bottom:"100px",
        marginBottom:"-40px",
        color:"#EFFFFD"

    }
    return (
        
        <div id="about">
        <div className="about">
        <div className="header" style={{marginTop:"50px"}}>
            ABOUT
        </div>
        
        <Container fluid style={{marginTop:"5%",backgroundColor:"white"}}>
        
            <Row >
            
                <Col xs={6} lg={3}><div style={{textAlign:"center"}}>
                <Fade >
                <HexagonIcon style={style}/>
                
                <SpeedIcon style={iconStyle}/>
                </Fade>
                <Slide duration="500">
                <h1>Fast</h1>
                <p >Fast load times and lag free interaction, my highest priority.</p>
                </Slide>
            </div>
            
            </Col>
            

        
            <Col xs={6} lg={3}><div style={{textAlign:"center"}}>
                
            <Fade >
            <HexagonIcon style={style}/>
            <ScreenshotMonitorIcon style={iconStyle}/>
            </Fade>
            <Slide duration="500">
                <h1>Responsive</h1>
                
                <p>My layouts will work on any device, big or small.</p>
                </Slide>
            </div>
            
           </Col>
        
            <Col xs={6} lg={3}><div style={{textAlign:"center"}}>
            <Fade >
            <HexagonIcon style={style}/>
            <LightbulbIcon style={iconStyle}/>
            </Fade>
            <Slide duration="500">
                <h1>Intuitive</h1>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </Slide>
            </div>
            
            </Col>
            
            <Col xs={6} lg={3}><div style={{textAlign:"center"}}>
            <Fade duration={200}>
            <HexagonIcon style={style}/>
            <RocketLaunchIcon style={iconStyle}/>
            </Fade>
            <Slide duration="500">
                <h1>Dynamic</h1>
                <p>Websites don't have to be static, I love making pages come to life.</p>
                </Slide>
            </div></Col>
            
            </Row>
            
        </Container>
        
        </div>
        </div>
        
    )

}

export default About;