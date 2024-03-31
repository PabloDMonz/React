import React from 'react'
import './navbar.css'
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <ul className='navLinks'>
                <a href='#'>Inicio</a>
                <a href='#'>Productos</a>
                <a href='#'>Nosotros</a>
                <a href='#'>Contacto</a>
                <div className='carro'>
                  <FaCartShopping size="50px" /> 
                  <span className='placa'>0</span> 
                </div>
                

            </ul>   
                    
        </nav>
    </div>
  )
}

export default Navbar
