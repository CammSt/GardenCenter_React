import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function CartWidget({className}) {

    return (
        <div>
            <Link to={`/cart`}>
                <FontAwesomeIcon icon={faCartShopping} className={className}/>
            </Link>
        </div>
    )
}
