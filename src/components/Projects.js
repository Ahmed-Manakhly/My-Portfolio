import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import {Container , Row , Col } from 'react-bootstrap' ;
import MekhoSocial from '../assets/MekhoSocial.PNG' ;
import Self_Teach from '../assets/Self_Teach.PNG' ;
import Organization_Portfolio from '../assets/Organization_Portfolio.PNG' ;
import Expenses_Dashboard from '../assets/Expenses_Dashboard.PNG' ;
import events_manager from '../assets/Events_Manager.PNG' ;
import food_order_app from '../assets/Food_Order_App.PNG' ;
import shopping_cart from '../assets/Shopping_Cart.PNG' ;
import note_app from '../assets/Note_App.PNG' ;
//-------------------------------------- strings
const desc1 = "The purpose of this project is to assist the user in measuring and analyzing their monthly expenses for better control. It was a significant challenge for me as I had to handle data transformation, adding, deleting, and updating without relying on server-side code. storing it in Firebase BD  and getting the latest updates to display" ;
const desc2 = 'I have built some great templates and responsive designs using only HTML, CSS & some JS to manage some  UI features and also  bootstrap' ;
const desc3 = 'The purpose of this project is to assist the user to browse all available menus of different kinds of food and then to assets him in ordering and submitting his address, managing the cart with the help of context' ;
const desc4 =  "it's an E-commercial website with a shopping cart, it was a great opportunity to practice a complication of a lot of technologies together" ;
const desc5 =  'awesome notes app with the help of the local storage and also nice themes options made by SASS, it was a great opportunity to practice a complication of a lot of technologies together'  ;
const desc6 = "This App allows the user to browse Events, Once authenticated, the user can add, delete or edit, it's connected to a Node.JS backend API, and it was a great opportunity to practice router and authentication, as well as deal with REST API." ;
//-------------------- project data []
const myProject = [
    {name : 'Mekho_Social', tools : ['HTML','CSS','JS'] , img: MekhoSocial, demo : 'https://ahmed-manakhly.github.io/MekhoSocial',  repo : 'https://github.com/Ahmed-Manakhly/MekhoSocial' , desc :desc2 } ,
    {name : 'Self_Teach', tools : ['HTML','CSS','JS'] , img: Self_Teach, demo : 'https://ahmed-manakhly.github.io/Self_Teach',  repo : 'https://github.com/Ahmed-Manakhly/Self_Teach' , desc :desc2 } ,
    {name : 'Organization_Portfolio' ,tools : ['HTML','CSS','JS','BOOTSTRAP'] , img: Organization_Portfolio, demo : 'https://ahmed-manakhly.github.io/Organization_Portfolio',  repo :  'https://github.com/Ahmed-Manakhly/Organization_Portfolio', desc : desc2} ,
    {name : 'Expenses_Dashboard' , tools : ['react','router','redux','BOOTSTRAP','SASS'] , img: Expenses_Dashboard, demo : 'https://expenses-dashboard.onrender.com' ,  repo :  'https://github.com/Ahmed-Manakhly/Expenses_Dashboard', desc : desc1} ,
    {name : 'Events_Manager', tools : ['react','router'] , img: events_manager, demo : 'https://events-manager-egc6.onrender.com',  repo : 'https://github.com/Ahmed-Manakhly/Events_Manager' , desc : desc6 } ,
    {name : 'Food_Order_App' , tools : ['react','SASS'] , img: food_order_app , demo : 'https://food-order-app-1d0r.onrender.com',  repo : 'https://github.com/Ahmed-Manakhly/Food_Order_App' , desc :desc3 } ,
    {name : 'Shopping_Cart', tools : ['react','router','TS','BOOTSTRAP','SASS'] , img: shopping_cart, demo : 'https://shopping-cart-r0hf.onrender.com',  repo :  'https://github.com/Ahmed-Manakhly/Shopping_Cart', desc :desc4 } ,
    {name : 'Note_App', tools : ['react','router','TS','BOOTSTRAP','SASS'] , img:note_app , demo : 'https://note-app-ia0b.onrender.com',  repo : 'https://github.com/Ahmed-Manakhly/Note_App'  , desc : desc5} ,
]

//---------------------------------------

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
                {myProject.map((val,ind)=>{return (
                                <Col className="pro-col p-2 d-flex  align-items-start flex-column" key={ind}>
                                    <div className="img  overflow-hidden rounded-3 m-2 mb-5">
                                        <img src={val.img} alt="pro-img" className="img-fluid p-0 "/>
                                    </div>
                                    <div className={` details `}>
                                        <div className="fst-italic  pro-title">{val.name}</div>
                                        <div className="pro-icons">
                                            <BsGithub className='pro-ico ' onClick={()=>{window.open(val.repo)}}/>
                                            <FaGlobe className='pro-ico' onClick={()=>{window.open(val.demo)}}/>
                                        </div>
                                    </div>
                                    <p className="text-white fs-6 fst-italic m-2">{val.tools.join(' | ')}</p>
                                    <p className ='text-white-50  des  m-0 text-start'>
                                        {val.desc}
                                    </p>
                                </Col>
                )})}
            </Row>
            </section>
        </Container>
    )
}

export default Projects ;