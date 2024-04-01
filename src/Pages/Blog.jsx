import React from 'react'
import MenuItem from '../Components/MenuItem'
import Footer from '../Components/Footer'

function Blog() {
  return (
    <>
    <div className='flex flex-col h-screen'>
    <MenuItem />
     <div className="flex flex-col grow">
        <h1>Blog</h1>
     </div>
    <Footer />

    </div>
    
    </>
  )
}

export default Blog