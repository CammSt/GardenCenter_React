import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget({className}) {

    return (
        <div>
            <a href='index.html'>
                <FontAwesomeIcon icon={faCartShopping} className={className}/>
            </a>
        </div>
    )
}
