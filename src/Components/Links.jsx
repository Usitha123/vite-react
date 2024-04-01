import React from 'react'
import MenuItem from './MenuItem'

function Links() {
  return (
    <div>
        <MenuItem linktext="Home" linkurl="/" />
        <MenuItem linktext="Blog" linkurl="/blog" />
        <MenuItem linktext="About" linkurl="/about" />
        <MenuItem linktext="Contact" linkurl="/contact" />

    </div>
  )
}

export default Links