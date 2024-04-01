import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/react.svg'

function Footer() {
  return (
    <>
     
     <ul className='flex gap-3 py-3 text-white bg-black'>
        <img src={Logo} alt="" /> 
        <li className="justify-center"><Link to="/home">Home</Link></li> 
     </ul>
    
    </>
  )
}

export default Footer