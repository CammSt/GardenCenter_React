import React,  { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

import Header from '../components/Header'
import { CartContext } from '../contexts/CartContext';
import '../styles/CartStyle.css'

export default function Cart() {

    let cartContext = useContext(CartContext)
    let cartList = cartContext.cartList

    return (
        <div>
            <Header screenTitle={'TU COMPRA'}/>

            <div className='cartContainer'>
                {
                    cartList.map( (element,index) => {
                        return ( 
                            <div className="itemContainer" key={index}>

                                <div className='itemContentContainer'>
                                    <div className="itemContainer_Image">
                                        <img src={element.image}  alt={element.imageAlt} />
                                    </div>

                                    <div>
                                        <div className="itemContainer_Text">
                                            {element.name}
                                        </div>
                                        <div className="itemContainer_Text">
                                            Valor : $ { element.price * element.amount }
                                        </div>
                                        <div className="itemContainer_Text">
                                            Cantidad : { element.amount }
                                        </div>
                                    </div>
                                </div>

                                <FontAwesomeIcon icon={faTrashCan} className='deleteProductIcon' onClick={() => cartContext.removeItem(element)}/>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
