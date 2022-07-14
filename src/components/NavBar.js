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
                        {/* <i className='fa-solid fa-house'></i> */}
                        INICIO
                    </a>
                </li>
                <li> 
                    <a href='Location.html'>
                        {/* <i className='fa-solid fa-map-location-dot'></i> */}
                        DONDE ENCONTRARNOS
                    </a>
                </li>
                <li> 
                    <a href='Shop.html'>
                        {/* <i className='fa-solid fa-seedling'></i> */}
                        TIENDA
                    </a>
                </li>
                <li> 
                    <a href='AboutUs.html'>
                        {/* <i className='fa-solid fa-user-group'></i> */}
                        QUIENES SOMOS
                    </a>
                </li>
                <li> 
                    <a href='ContactInfo.html'>
                        {/* <i className='fa-solid fa-envelope-open-text'></i> */}
                        CONTACTANOS
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
