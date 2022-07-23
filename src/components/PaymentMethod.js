import React from 'react'
import '../styles/PaymentMethod.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PaymentMethod({description,icon}) {

    return (
        <div className="eachPaymentContainer">
            <div className="eachPaymentContainer__Icon">
                <FontAwesomeIcon icon={icon} className='navBarItem_Icon'/>
            </div>
            <div className="eachPaymentContainer__Text">
                {description}
            </div>

        </div>
    )
}
