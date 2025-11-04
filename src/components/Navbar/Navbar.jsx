import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
      <div className='navbar'>
          <ul className='nav-menu'>
        <li><AnchorLink className='anchor-link 'offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link 'offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
              <li><AnchorLink className='anchor-link 'offset={50} href='#work'><p onClick={()=>setMenu("work")}>Project</p></AnchorLink></li>
          </ul>
    </div>
  )
}

export default Navbar