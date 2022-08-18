import React,  { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import { CartContext } from '../contexts/CartContext';
import '../styles/CartStyle.css'
import '../styles/TitleStyle.css'

export default function Cart() {

    let cartContext = useContext(CartContext)
    let cartList = cartContext.cartList

    let totalPrice = cartContext.totalPrice

    return (
        <div>
            <Header screenTitle={'TU COMPRA'}/>

            { cartList.length != 0  ?   

                <div>
                    <div className='cartContainer'>
                        {
                            cartList.map( (element,index) => {
                                return ( 
                                    <div className="itemContainer" key={index}>
    
                                        <div className='itemContentContainer'>
                                            <div className="itemContainer_Image">
                                                { 
                                                    element.categoryId == 1 ?
                                                    
                                                    <img src={require('../assets/plantas_exterior/' + element.image)}  alt={element.imageAlt} />

                                                    :

                                                    <img src={require('../assets/plantas_interior/' + element.image)}  alt={element.imageAlt} />
                                                }
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

                    <div className='finalPriceText'>PRECIO TOTAL  ---> $ {totalPrice}</div>

                    <div className='emptyCartText' onClick={() => cartContext.emptyCart()}> VACIAR COMPRA </div>
                </div>

                : 

                <div className='emptyCartContainer'>
                    <div className='emptyCartContainer_Text'>  Carrito vacío</div>

                    <div className='titleContainer'> 
                        <Link to={'/'} className='titleContainer__Text emptyCartContainer_Redirect'>Puede agregar a su carrito en nuestra tienda </Link>
                    </div>

                </div>
            }
        </div>
    )
}
