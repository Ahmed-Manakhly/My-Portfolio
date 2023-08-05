import React from "react";
import {Container , Row , Col , Card , Button} from 'react-bootstrap' 

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
                                <p className="text-white fs-3">Title</p>
                                <span className='ico' >Date</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>Special title treatment</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">Title</p>
                                <span className='ico' >Date</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>Special title treatment</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">Title</p>
                                <span className='ico' >Date</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>Special title treatment</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="about-col ">
                    <Card className="card position-relative">
                        <span className="v-bar"></span>
                        <span className="h-bar"></span>
                        <Card.Header className={`d-flex justify-content-evenly align-items-center shadow`}>
                                <p className="text-white fs-3">Title</p>
                                <span className='ico' >Date</span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-white fst-italic '>Special title treatment</Card.Title>
                            <Card.Text className ='text-white-50 '>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </section>
        </Container>
    )
}

export default About ;