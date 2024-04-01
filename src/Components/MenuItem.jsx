import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/react.svg'

function MenuItem() {
  return (
    <>

      
     <div className='flex justify-between py-3 bg-black'>
     
     <img src={Logo} alt="" /> 
     
    
     <ul className='flex gap-3 pr-2 text-white'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
     </ul>
     </div>
     
    
    </>
  )
}

export default MenuItem