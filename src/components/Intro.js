import React from "react";
import profile from "../assets/it's me.png" ;
import linkedin from '../assets/linkedin.png' ;
import github from '../assets/github.png' ;
import {Container , Row , Col} from 'react-bootstrap' 

const   Intro = () => {
    return(
        // <section >
        <Container id="home" >
            <Row md={1} xs={1} lg={2} className={`g-3  p-4 m-0 mt-5 mb-2 secpro justify-content-center`}>
                <Col className="section__pic-container">
                    {/* <div > */}
                        <img src={profile} alt="Manakhly profile picture" className="img-fluid "/>
                    {/* </div> */}
                </Col>
                <Col className="section__text">
                {/* <div className="section__text"> */}
                    <p className="section__text__p1">WELCOME TO MY WORLD</p>
                    <h1 className="title"><span className="text-white me-2">Hi, I'm</span>Ahmed El Manakhly</h1>
                    <p className="section__text__p2">Frontend Developer</p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={()=>{window.open('./assets/resume-example.pdf')}}> Download CV </button>
                        <button className="btn btn-color-1" onClick={()=>{window.location.href='./#contact'}}> Contact Info </button>
                    </div>
                    <div className="socials-container">
                        <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={()=>{window.location.href='https://linkedin.com/'}} />
                        <img src={github} alt="My Github profile" className="icon" onClick={()=>{window.location.href='https://github.com/'}} />
                    </div>
                {/* </div> */}
                </Col>
            </Row>
        </Container>
        // </section>
    )
}


export default Intro ;