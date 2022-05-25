import React, { useState } from "react";
import "./navbar.css";
import {Navbar, Nav} from "react-bootstrap" ;
import { Link, animateScroll as scroll } from "react-scroll";
const NavigationBar = ()=>{
    const[expanded,setExpanded] = useState(false);
    const [toggleStyle,setStyle]=useState({
        backgroundColor:"#1b242f"
    })

    return (
        
        <Navbar className="navbar-custom" sticky="top" expand="sm" expanded={expanded} collapseOnSelect>
            <div style={{marginLeft:"60px"}}>
                <Navbar.Toggle onMouseEnter={()=>
                    setStyle({backgroundColor:"white"}) }

                    onMouseLeave={()=>(setStyle({backgroundColor:"#1b242f"}))}
                    style={toggleStyle}
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                    />
                <Navbar.Collapse >

                <Nav >

                <Link  className="nav-links " activeClass="active" to ="home" smooth={true}   duration={1000} onClick={() => setExpanded(false)}>Home</Link>
                <Link  className="nav-links" activeClass="active" to="about" smooth={true} offset={-100} duration={1000}onClick={() => setExpanded(false)}>About</Link>
                <Link  className="nav-links" activeClass="active" to ="portfolio" smooth={true} offset={-150} duration={1000} onClick={() => setExpanded(false)}>Portfolio</Link>
                <Link  className="nav-links" activeClass="active" to ="contact" smooth={true} offset={-100} duration={1000}onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                

                </Navbar.Collapse>

            </div>
        </Navbar>


    )

}


export default NavigationBar;