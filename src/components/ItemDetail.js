import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/ItemDetailStyle.css'
import ItemCountDetail from './ItemCountDetail'

export default function ItemDetail({product}) {

    const [ finalAmount, setFinalAmount ] = useState(0)

    return (
        <div className="itemDetailContainer" >

            <div className="itemDetailContainer_Image">
                { 
                    product.categoryId == 1 ?
                    
                    <img src={require('../assets/plantas_exterior/' + product.image)}  alt={product.imageAlt} />

                    :

                    <img src={require('../assets/plantas_interior/' + product.image)}  alt={product.imageAlt} />
                }
            </div>

            <div>
                <div className="itemDetailContainer_Name">
                    {product.name}
                </div>
                <div className="itemDetailContainer_Price">
                    $ {product.price}
                </div>
                <div className="itemDetailContainer_Description">
                    {product.description}
                </div>

                { 
                    finalAmount === 0 ? 
                    
                        <ItemCountDetail item={product} setFinalAmount={setFinalAmount}/>
                    :
                        <NavLink to={'/cart'} style={{textDecoration:'none'}}>
                            <button className='finishGoToCartButton'>
                                TERMINAR COMPRA
                            </button>
                        </NavLink>
                }


            </div>
        </div>
    )
}
