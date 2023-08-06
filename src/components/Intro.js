import React from "react";
import profile from "../assets/it's me.png" ;
import linkedin from '../assets/linkedin.png' ;
import github from '../assets/github.png' ;
import {Container , Row , Col} from 'react-bootstrap' ;
import CV from '../assets/Ahmed-Manakhly-Resume.pdf' ;

const   Intro = () => {
    return(
        <Container id="home" >
            <Row md={1} xs={1} lg={2} className={`g-3  p-4 m-0 mt-5 mb-2 secpro justify-content-center`}>
                <Col className="section__pic-container">
                        <img src={profile} alt="Manakhly profile" className="img-fluid "/>
                </Col>
                <Col className="section__text">
                    <p className="section__text__p1">WELCOME TO MY WORLD</p>
                    <h1 className="title"><span className="text-white me-2">Hi, I'm</span>Ahmed El Manakhly</h1>
                    <p className="section__text__p2">Frontend Developer</p>
                    <div className="btn-container">
                        <a className="btn btn-color-2" href={CV} download >Download CV</a>
                        <button className="btn btn-color-1" onClick={()=>{window.location.href='./#contact'}}>Let's Talk</button>
                    </div>
                    <div className="socials-container">
                        <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={()=>{window.open('https://www.linkedin.com/in/ahmed-manakhly-6b9543219')}} />
                        <img src={github} alt="My Github profile" className="icon" onClick={()=>{window.open('https://github.com/Ahmed-Manakhly')}} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Intro ;