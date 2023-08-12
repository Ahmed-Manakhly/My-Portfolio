import React from 'react' ;
import logo from '../assets/logo2.png' ;
const Footer =()=>{
    const curYear = new Date().getFullYear().toString()  ;
    return ( 
        <footer className="copyright d-flex justify-content-evenly p-4 flex-lg-row flex-column align-items-center">
            <img src={logo} alt="logo" className=" img-fluid logo mb-3" onClick={()=>{window.location.href='#home'}}/>
            <div className='text-white d-flex align-items-center flex-lg-row flex-column mb-3'> All Rights Reserved &copy; {`${curYear} -  `}<span className=' fst-italic'>Ahmed El Manakhly</span></div>
        </footer>
    )
}
export default Footer ;