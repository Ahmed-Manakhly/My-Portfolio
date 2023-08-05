import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import proImg from '../assets/about-pic.png' ;
import {Container , Row , Col } from 'react-bootstrap' 

const   Projects = () => {
    return(
        <Container id="projects" >
            <section className="secpro w-100 ">
            <Row md={1} xs={1} lg={2} className={`g-5  p-4  justify-content-center `}>
                <Col className="about-1st-row-col ">
                <p className="section__text__p1 text-c">Browse My Recent</p>
                <h1 className="title fs-1 w-100">Projects</h1>
                </Col>
            </Row>
            <Row md={1} s={1} xs={1} lg={3} className={`g-5  p-5  gap-5 justify-content-center `}>
                {[1,2,3,4,5,6,7,8].map((val,ind)=>{return (
                                <Col className="pro-col p-2 d-flex  align-items-start flex-column">
                                    <div className="img  overflow-hidden rounded-3 m-2 mb-5">
                                        <img src={proImg} alt="pro-img" className="img-fluid p-0 "/>
                                    </div>
                                    <div className={` details `}>
                                        <div className="fst-italic  pro-title">pro-name</div>
                                        <div className="pro-icons">
                                            <BsGithub className='pro-ico ' />
                                            <FaGlobe className='pro-ico'/>
                                        </div>
                                    </div>
                                    <p className ='text-white-50  des  m-0'>
                                        With supporting text below as a natural lead-in to additional content.
                                    </p>
                                </Col>
                )})}
            </Row>
            </section>
        </Container>
    )
}

export default Projects ;