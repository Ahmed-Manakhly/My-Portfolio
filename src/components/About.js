import React from "react";
import {Container , Row , Col , Card } from 'react-bootstrap'
import PreIco from '../assets/experience.png' ;
import EduIco from '../assets/education.png'  ;
import GoIco from '../assets/checkmark.png'  ;
import resIco from '../assets/quote.png'  ;

const   About = () => {
    return(
        <Container id="about">
            <section className="secOne m-0 mt-5 mb-2 ">
            <Row md={1} xs={1} lg={2} className={`g-5  p-4  justify-content-center `}>
                <Col className="about-1st-row-col ">
                <p className="section__text__p1 text-c">Get To Know More</p>
                <h1 className="title w-100">About Me</h1>
                </Col>
            </Row>
            <Row md={1} xs={1} lg={2} className={`g-5  p-5   justify-content-center `}>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">Education Info</p>
                                <span className='ico' ><img className="icon" src={EduIco} alt="PreIco" /></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>2003 – 2007</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                <strong className ='text-white'>Bachelor of Management information system </strong>.
                                <p>Ras Al-Bar Academy for Qualitative studies</p>
                            </Card.Text>
                            <Card.Title className='text-white fst-italic '>Courses</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                <strong className ='text-white'>I have recently got a certificate of completion in React, Router, Redux -The complete-guide-course from udemy</strong>.
                                <p>HTML CSS JS completed courses with practice</p>
                                <p>SASS, BOOTSTRAP, TS, and more useful tools and technologies</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">Career Path</p>
                                <span className='ico' ><img className="icon" src={PreIco} alt="PreIco" /></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>Previous Experiences</Card.Title>
                            <Card.Text className ='text-white-50 '>
                            With over 5+ years of experience as a Data Analyst in the contact center industry,
                            I am excited to bring my problem-solving, numerical, and coding skills to your esteemed team and work environment as <strong className ='text-white'>a front-end developer</strong>.
                            I have spent the past few months preparing myself by acquiring all the required skills, technologies, and tools needed for web development.
                            Additionally,I have gained hands-on experience in building real projects to perform tasks that are typically required for a front-end role.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">Responsibility</p>
                                <span className='ico' ><img className="icon" src={resIco} alt="PreIco" /></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>As a front-end developer,</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                I am ready to take on the responsibility of converting a sketched design into lines of code,
                                developing user-friendly web pages and applications, devising solutions for users, managing incoming and outgoing requests
                                from/to the backend, and transforming data when necessary. I will also provide clear feedback and direction to users
                                <strong className ='text-white'>and stay up-to-date with the latest technologies.</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">My Goal</p>
                                <span className='ico' ><img className="icon" src={GoIco} alt="GoIco" /></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>As a front-end developer,</Card.Title>
                            <Card.Text className ='text-white-50 '>
                            I've always been interested in combining my passion for coding and my knowledge of business analysis,
                            to develop sites that attract new users and boost company sales, providing clients with an easier and more enjoyable experience,
                            based on my previous work in a contact center I'm skilled in interpersonal communication and time management and,
                            <strong className ='text-white'>also possess hands-on training and coding knowledge that will lead to success in my career.</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </section>
        </Container>
    )
}

export default About ;