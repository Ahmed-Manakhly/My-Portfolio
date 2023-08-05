import useInput from '../hooks/Use-Input';
import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import  contactImg  from '../assets/contactImg.png';
import emailIcon from "../assets/email.png"
// import { FaCss3Alt } from "react-icons/fa";
// import { FaHtml5 } from "react-icons/fa";
// import { SiJest } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
// import { DiBootstrap } from "react-icons/di";
// import { SiRedux } from "react-icons/si";
// import { SiReactrouter } from "react-icons/si";
// import { FaBootstrap } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { FaSass } from "react-icons/fa";
import {Container , Row , Col  } from 'react-bootstrap' 

const   Contact = () => {
    const [message, setMessage] = useState(false);
    const formRef = useRef();

    //-------------------------------------------------
    // const skills = [
    //     {name : 'HTML' , progress : 'Experienced' , icon :  < FaHtml5 className="skillIco"/> },
    //     {name : 'CSS' , progress : 'Experienced' , icon :  < FaCss3Alt className="skillIco"/> },
    //     {name : 'JavaScript' , progress : 'Experienced' , icon :  < SiJavascript className="skillIco"/> },
    //     {name : 'SASS' , progress : 'Experienced' , icon :  < FaSass className="skillIco"/> },
    //     {name : 'TypeScript' , progress : 'Very Good' , icon :  < SiTypescript className="skillIco"/>},
    //     {name : 'React' , progress : 'Experienced' , icon :  < FaReact className="skillIco"/> },
    //     {name : 'Bootstrap' , progress : 'Very Good' , icon :  < FaBootstrap className="skillIco"/> },
    //     {name : 'React-Router' , progress : 'Very Good' , icon :  < SiReactrouter className="skillIco"/> },
    //     {name : 'React-Redux' , progress : 'Very Good' , icon :  < SiRedux className="skillIco"/> },
    //     {name : 'React-Bootstrap' , progress : 'Good' , icon :  < DiBootstrap className="skillIco"/> },
    //     {name : 'Git & GitHub' , progress : 'Good' , icon :  < FaGithub className="skillIco"/> },
    //     {name : 'JEST' , progress : 'basic knowledge' , icon :  < SiJest className="skillIco"/> },
    // ]
    //------------------------------------------------------
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
    //-------------------------------------------------
    // const sendRequest = async (fName , lName , email , msg) => {
    //     const response = await fetch('https://formspree.io/f/xvoljplw' ,{
    //         method : 'POST',
    //         body : JSON.stringify({'First Name':fName , "Last Name" : lName , "Email Address" : email, "Message" : msg}) ,
    //         });
    //         //--------------------------
    //         if(!response.ok) {
    //         throw new Error('Sending  Data Failed!') ;
    //         }
    // }
    //-----------------------------------------------------------------------

    //--------------------------------------------------
    // const formSubmissionHandler = async(event) => {
    
    // if(!formIsValid){
    //     event.preventDefault() ;
    //     return;
    // } ;
    // console.log(enteredName) ;
    // console.log(enteredLName) ;
    // console.log(enteredEmail) ;
    // console.log(msg) ;
    // //-------------------------

    // resetNameInput() ;
    // resetEmailInput() ;
    // resetLNameInput() ;
    // resetMsg() ;
    // }
    //------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formIsValid){
            return;
        } ;
        emailjs
          .sendForm(
            'service_nt6pjws',
            'template_2rxlwwg',
            formRef.current,
            'jt-x6mQFrGGDKFCAh'
          )
          .then(
            (result) => {
              console.log(result.text);
              setMessage(true);
            },
            (error) => {
              console.log(error.text);
            }
          );
    
        e.target.reset();
        resetNameInput() ;
        resetEmailInput() ;
        resetLNameInput() ;
        resetMsg() ;
      };


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
                <Col className="contact-col d-flex flex-column justify-content-center  p-4 align-items-center">
                    <Row className="overflow-hidden rounded-3 m-4">
                        <img src={contactImg} alt="contactImg" className=" img-fluid p-0"/>
                    </Row>
                    <Row><h1 className="title">Ahmed El Manakhly</h1></Row>
                    <Row><p className="section__text__p2">Frontend Developer</p></Row>
                    <Row><p className="section__text__p1 text-center">It would be a pleasure to hear from you</p></Row>
                    <Row><p className="section__text__p1 text-center">Phone Numbers :</p></Row>
                    <Row><span className="text-white-50">01015525458  &  01015525458</span> <span className=""></span> </Row>
                    <Row><p className="section__text__p1 text-center">Email Address :</p></Row>
                    <Row className='d-flex justify-content-center '>
                    <img
                        src={emailIcon}
                        alt="Email icon"
                        className=" img-fluid  mailImg"
                        />
                    <span ><a href="mailto:selmnakhly@gmail.com" className='form-btn email'>Aelmnakhly@gmail.com</a></span>
                    </Row>
                    <Row><p className="section__text__p2">FIND ME IN</p></Row>
                    <div className="socials-container">
                        <FaLinkedinIn className="icon fs-5" onClick={()=>{window.location.href='https://linkedin.com/'}} />
                        <FaTwitter className="icon" onClick={()=>{window.location.href='https://github.com/'}} />
                        <FaFacebookF className="icon" onClick={()=>{window.location.href='https://github.com/'}} />
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
