import React from 'react' ;
const Footer =()=>{
    const curYear = new Date().getFullYear().toString()  ;
    return ( 
        <div className="copyright d-flex justify-content-evenly p-5">
            <div className='text-white'> All Rights Reserved &copy; {curYear} - <span className=' fst-italic'>Ahmed El Manakhly</span></div>
        </div>
    )
}
export default Footer ;