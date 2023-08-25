import useInput from '../hooks/Use-Input';
import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF } from "react-icons/fa";
import  contactImg  from '../assets/contactImg.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import {Container , Row , Col  } from 'react-bootstrap'  
import linkedin from '../assets/linkedin.png' ;
import github from '../assets/github.png' ;
//-------------------------------- whatsapp
const whatsapp  = 'https://wa.me/201015525458?text=Thank%20you%20for%20reaching%20out%20to%20me.%20How%20can%20I%20assist%20you?' ;

const   Contact = () => {
    const [message, setMessage] = useState(false);
    const formRef = useRef();
    //-----------------------------------------------------------------------
    const {value : enteredName ,hasError : nameInputIsInvalid , valueIsValid : enteredNameIsValid ,
        valueChangeHandler : nameInputChangeHandler , inputBlurHandler : nameInputBlurHandler , reset : resetNameInput} = useInput(value => value.trim() !=='') ;
    const {value : enteredLName ,hasError : lNameInputIsInvalid , valueIsValid : enteredLNameIsValid ,
        valueChangeHandler : LnameInputChangeHandler , inputBlurHandler : LnameInputBlurHandler , reset : resetLNameInput} = useInput(value => value.trim() !=='') ;
    const {value : msg ,hasError : msgIsInvalid , valueIsValid : enteredMsgIsValid ,
        valueChangeHandler : msgChangeHandler , inputBlurHandler : msgBlurHandler , reset : resetMsg} = useInput(value => value.trim() !=='') ;
    const {value : enteredEmail ,hasError : emailInputIsInvalid , valueIsValid : enteredEmailIsValid ,
        valueChangeHandler : emailInputChangeHandler , inputBlurHandler : emailInputBlurHandler , reset : resetEmailInput} = useInput(value => value.includes('@')) ;
    //--------------------------------------------------
    let formIsValid = false
    if(enteredNameIsValid && enteredEmailIsValid && enteredLNameIsValid && enteredMsgIsValid){
    formIsValid = true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formIsValid){
            return;
        } ;
        emailjs.sendForm(
            'service_nt6pjws',
            'template_2rxlwwg',
            formRef.current,
            'g-mC-hXOXo1N6ykLx').then(
            (result) => {
                console.log(result.text);
                setMessage(true);
            },
            (error) => {
                console.log(error.text);
            });
    
        e.target.reset();
        resetNameInput() ;
        resetEmailInput() ;
        resetLNameInput() ;
        resetMsg() ;};
    //--------------------------------------------------
    const nameInputClasses = nameInputIsInvalid? 'form-control invalid' : 'form-control' ;
    const lNameInputClasses = lNameInputIsInvalid? 'form-control invalid' : 'form-control' ;
    const emailInputClasses = emailInputIsInvalid? 'form-control invalid' : 'form-control' ;
    const msgClasses = msgIsInvalid? 'form-control invalid' : 'form-control' ;
    //----------------------------------------------------------

    return(
        <Container id="contact">
            <section className="secpro w-100 ">
            <Row className={`g-5  p-4  justify-content-center `}>
                <Col className="about-1st-row-col ">
                <p className="section__text__p1 text-center">Get In Touch</p>
                <p className="fs-4 text-light fst-italic text-center">I do receive your messages and will respond ASAP if the valid email is provided :) </p>
                <h1 className="title w-100">Contact With Me</h1>
                </Col>
            </Row>
            <Row md={2} xs={1} lg={3} className={`g-5  p-5   gap-5 justify-content-center `}>
                <Col className="contact-col d-flex flex-column justify-content-center ">
                    <Row className="overflow-hidden rounded-3 m-4">
                        <img src={contactImg} alt="contactImg" className=" img-fluid p-0"/>
                    </Row>
                    <Row><h1 className="title">Ahmed El Manakhly</h1></Row>
                    <Row><p className="section__text__p2">Frontend Developer</p></Row>
                    <Row><p className="section__text__p1 text-center">It would be a pleasure to hear from you</p></Row>
                    <div className="socials-container w-100 d-flex justify-content-between m-2 ">
                        <FaMobileAlt className="icon fs-5" />
                        <Col className="text-white-50 text-center" >+201117001445</Col>
                    </div>
                    <div className="socials-container w-100 d-flex justify-content-between m-2 ">
                        <FaWhatsapp className="icon fs-5 " onClick={()=>{window.open(whatsapp)}}/>
                        <Col className="text-white-50 text-center" >+201117001445</Col>
                    </div>      
                    <a href="mailto:aelmnakhly@gmail.com" className='form-btn email p-2 w-100 d-flex justify-content-center '>Aelmnakhly@gmail.com</a>
                    <div><p className="section__text__p2 w-100 d-flex justify-content-center m-2 ">FIND ME IN</p></div>
                    <div className="socials-container w-100 d-flex justify-content-center m-4  ">
                        <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={()=>{window.open('https://www.linkedin.com/in/ahmed-manakhly-6b9543219')}} />
                        <img src={github} alt="My Github profile" className="icon" onClick={()=>{window.open('https://github.com/Ahmed-Manakhly')}} />
                        <FaFacebookF className="icon" onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100007848870358')}} />
                    </div>
                </Col>

                <Col  className="contact-col flex-fill ">
                    <form ref={formRef} onSubmit={handleSubmit}>
                    <Col className='d-flex flex-column justify-content-center  p-4 align-items-center'>
                        <Row className={`${nameInputClasses} d-flex flex-column align-items-center w-100`} >
                            <label htmlFor='f-name'>First Name</label>
                            <input type='text' id='f-name' name="First Name" placeholder="First Name" required
                            onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler} />
                            {nameInputIsInvalid && <p className='error-text'>name must not be empty</p>}
                        </Row>
                        <Row className={`${lNameInputClasses} d-flex flex-column align-items-center w-100`}>
                            <label htmlFor='l-name'>Last Name</label>
                            <input type='text' id='l-name'  name="Last Name" placeholder="Last Name" required 
                            onChange={LnameInputChangeHandler} value={enteredLName} onBlur={LnameInputBlurHandler} />
                            {lNameInputIsInvalid && <p className='error-text'>last name must not be empty</p>}
                        </Row>
                        <Row className={`${emailInputClasses} d-flex flex-column align-items-center w-100`}>
                                <label htmlFor='email'>E-Mail Address</label>
                                <input type='email' id='email' name="Email Address" placeholder="Your Email Address" required
                                onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlurHandler}/>
                                {emailInputIsInvalid && <p className='error-text'>please enter a valid email</p>}
                        </Row>
                        <Row className={`${msgClasses} d-flex flex-column align-items-center w-100`}>
                                <label htmlFor='textArea'>Leave Your Message</label>
                                <textarea id='textArea' name="Message" cols="30" rows="7" placeholder="Your Message" required
                                onChange={msgChangeHandler} value={msg} onBlur={msgBlurHandler}/>
                                {msgIsInvalid && <p className='error-text'>Your Message Must Not Be Empty</p>}
                        </Row>
                        <Row className='form-actions d-flex flex-column align-items-center w-100 m-0'>
                            <button disabled={!formIsValid} className='m-0 form-btn  '>{formIsValid?'Submit':'Kindly Fill Out The Required Fields'}</button>
                            {message && <span className='text-success mt-3 fst-italic fs-4'>Thanks, I'll reply ASAP :)</span>}
                        </Row>
                        </Col>
                    </form>
                </Col>
            </Row>
            </section>
        </Container>
    )
}

export default Contact ;
