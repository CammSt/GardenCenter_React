import React from 'react'
import '../styles/styles.css'

export default function NavBar() {
  return (

    <div>
        <div className='logoContainer'>
            <img src={require('../assets/logo-fondo-blanco.png')} alt='Logo Fondo Blanco' width='13%' height='13%'/>
        </div>
        
        <nav>
            <ul className='mainMenu'>
                <li> 
                    <a href='index.html'>
                        INICIO
                    </a>
                </li>
                <li> 
                    <a href='#'>
                        QUIENES SOMOS
                    </a>
                </li>
                <li> 
                    <a href='#'>
                        TIENDA
                    </a>
                </li>
                <li> 
                    <a href='#'>
                        CONTACTANOS
                    </a>
                </li>
                <li> 
                    <a href='#'>
                        CARRITO
                    </a>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}
