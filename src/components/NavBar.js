import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faHouse, faUserGroup, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

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
                        <NavLink className='navBarItem_Title' to={'/home'}>
                            <FontAwesomeIcon icon={faHouse} className='navBarItem_Icon'/>
                            INICIO
                        </NavLink>
                    </li>
                    <li className='navBarItem' > 
                        <NavLink className='navBarItem_Title' to={'/aboutUs'}>
                            <FontAwesomeIcon icon={faUserGroup} className='navBarItem_Icon'/>
                            QUIENES SOMOS
                        </NavLink>
                    </li>
                    <li className='navBarItem'> 
                        <NavLink className='navBarItem_Title' to={'/'}>
                            <FontAwesomeIcon icon={faSeedling} className='navBarItem_Icon'/>
                            TIENDA
                        </NavLink>
                    </li>
                    <li className='navBarItem'>
                        <NavLink className='navBarItem_Title' to={'/contact'}>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} className='navBarItem_Icon'/>
                            CONTACTANOS
                        </NavLink>
                    </li>
                    <li className='goToCartButton'> 
                        <NavLink className='navBarItem_Title' to={'/cart'}>
                            <CartWidget className='goToCartButton_Icon'/>
                        </NavLink>
                    </li>
                </ul>    
            </nav>
        </div>
    )
}
