import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faHouse, faUserGroup, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

import '../styles/NavBarStyle.css'
import CartWidget from './CartWidget'

export default function NavBar() {
    
  return (

    <div>
        <div className='logoContainer'>
            <img src={require('../assets/logo-fondo-blanco.png')} alt='Logo Fondo Blanco' width='13%' height='13%'/>
        </div>
        
        <nav>
            <ul className='mainMenu'>
                <li className='navBarItem'> 
                    <a href='index.html' className='navBarItem_Title'>
                        <FontAwesomeIcon icon={faHouse} className='navBarItem_Icon'/>
                        INICIO
                    </a>
                </li>
                <li className='navBarItem' > 
                    <a href='index.html' className='navBarItem_Title'>
                        <FontAwesomeIcon icon={faUserGroup} className='navBarItem_Icon'/>
                        QUIENES SOMOS
                    </a>
                </li>
                <li className='navBarItem'> 
                    <a href='index.html' className='navBarItem_Title'>
                        <FontAwesomeIcon icon={faSeedling} className='navBarItem_Icon'/>
                        TIENDA
                    </a>
                </li>
                <li className='navBarItem'> 
                    <a href='index.html' className='navBarItem_Title'>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className='navBarItem_Icon'/>
                        CONTACTANOS
                    </a>
                </li>
                <li className='goToCartButton'>
                    <CartWidget className='goToCartButton_Icon'/>
                </li>
            </ul>    
        </nav>
    </div>
  )
}
