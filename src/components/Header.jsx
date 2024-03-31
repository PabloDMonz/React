import React from 'react'
import Navbar from './navbar/Navbar'
import logo from '../assets/logo.jpg'
import './header.css'
import './logo.css'



function Header() {
  return (
    <>
    <div className = "header"> 
        <div>
        <img src={logo} className='logo' alt='logo'/>
        </div>
                 
        <Navbar className = "navbar"/>
    </div>
    
    
    </>

  )
}

export default Header
