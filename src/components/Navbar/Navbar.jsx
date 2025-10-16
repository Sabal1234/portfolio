import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
      <div className='navbar'>
          <img src="" alt="error" />
          <ul className='nav-menu'>
        <li><p onClick={()=>setMenu("home")}>Home</p>{ menu==="home"?<img src='' alt='image not shown'/>:<></>}</li>
              <li><p onClick={()=>setMenu("about")}>About Me</p>{ menu==="about"?<img src='' alt='image not shown'/>:<></>}</li>
              <li><p onClick={()=>setMenu("services")}>Services</p>{ menu==="services"?<img src='' alt='image not shown'/>:<></>}</li>
              <li><p onClick={()=>setMenu("work")}>Portfolio</p>{ menu==="home"?<img src='' alt='image not shown'/>:<></>}</li>
              <li><p onClick={()=>setMenu("contact")}>Contact</p>{ menu==="home"?<img src='' alt='image not shown'/>:<></>}</li>
          </ul>
          <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar