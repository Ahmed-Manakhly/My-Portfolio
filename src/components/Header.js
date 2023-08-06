import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo2.png' ;
import { FiMenu } from "react-icons/fi";

const Header = () => {

    return ( 

            <Navbar collapseOnSelect expand="lg" sticky='top' className="  d-flex justify-content-around mainNav">
              <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" className=" img-fluid logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <FiMenu className="toggler"/> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto ">
                  <Nav.Link href="#home" className={'text-center'}>Home</Nav.Link>
                  <Nav.Link href="#about" className={'text-center'} >About</Nav.Link>
                  <Nav.Link href="#skills"  className={'text-center'}>Skills</Nav.Link>
                  <Nav.Link href="#projects"  className={'text-center'}>Projects</Nav.Link>
                  <Nav.Link href="#contact"  className={'text-center'}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    )
} ;
export default Header ;