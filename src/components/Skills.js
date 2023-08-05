import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import {Container , Row , Col  } from 'react-bootstrap' 

const   Skills = () => {
    const skills = [
        {name : 'HTML' , progress : 'Experienced' , icon :  < FaHtml5 className="skillIco"/> },
        {name : 'CSS' , progress : 'Experienced' , icon :  < FaCss3Alt className="skillIco"/> },
        {name : 'JavaScript' , progress : 'Experienced' , icon :  < SiJavascript className="skillIco"/> },
        {name : 'SASS' , progress : 'Experienced' , icon :  < FaSass className="skillIco"/> },
        {name : 'TypeScript' , progress : 'Very Good' , icon :  < SiTypescript className="skillIco"/>},
        {name : 'React' , progress : 'Experienced' , icon :  < FaReact className="skillIco"/> },
        {name : 'Bootstrap' , progress : 'Very Good' , icon :  < FaBootstrap className="skillIco"/> },
        {name : 'React-Router' , progress : 'Very Good' , icon :  < SiReactrouter className="skillIco"/> },
        {name : 'React-Redux' , progress : 'Very Good' , icon :  < SiRedux className="skillIco"/> },
        {name : 'React-Bootstrap' , progress : 'Good' , icon :  < DiBootstrap className="skillIco"/> },
        {name : 'Git & GitHub' , progress : 'Good' , icon :  < FaGithub className="skillIco"/> },
        {name : 'JEST' , progress : 'basic knowledge' , icon :  < SiJest className="skillIco"/> },
    ]
    //------------------------------------------------------
    return(
        <Container id="skills">
            <section className="secOne m-0 mt-5 mb-5 ">
            <Row className={`g-5  p-4  justify-content-center `}>
                <Col className="about-1st-row-col ">
                <p className="section__text__p1 text-c">Explore My</p>
                <h1 className="title w-100">Development Skills</h1>
                </Col>
            </Row>
            <Row md={2} xs={1} lg={3} className={`g-5  p-5   justify-content-center `}>
                {skills.map((skill,i)=>{
                    return(
                        <Col key={i} className="skill-col">
                            <div className="d-flex justify-content-between skillCard gap-5 p-3 w-100">
                                <span className='ico' >{skill.icon}</span>
                                <Col>
                                    <Row><p className="text-white fs-6 fst-italic">{skill.name}</p></Row>
                                    <Row><p className ='text-white-50 '>{skill.progress}</p></Row>
                                </Col>
                            </div>
                        </Col>
                    )
                })}
            </Row>
            </section>
        </Container>
    )
}

export default Skills ;
