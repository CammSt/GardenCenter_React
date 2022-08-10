import React,  { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../styles/CartWidgetStyle.css';

import { CartContext } from '../contexts/CartContext';

export default function CartWidget({className}) {

    let cartContext = useContext(CartContext)
    let amount = cartContext.amount

    return (
        <div>
            <Link to={`/cart`}>
                <FontAwesomeIcon icon={faCartShopping} className={className}/>
                {
                    amount != 0 &&
                    <div className='cartNumber'>
                        { amount}
                    </div>
                }
            </Link>
        </div>
    )
}
