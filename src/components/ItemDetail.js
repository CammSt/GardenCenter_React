import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/ItemDetailStyle.css'
import ItemCountDetail from './ItemCountDetail'

export default function ItemDetail({cartList,product}) {

    const [ finalAmount, setFinalAmount ] = useState(0)

    return (
        <div className="itemDetailContainer" >

            <div className="itemDetailContainer_Image">
                <img src={product.image}  alt={product.imageAlt} />
            </div>

            <div>
                <div className="itemDetailContainer_Name">
                    {product.name}
                </div>
                <div className="itemDetailContainer_Price">
                    {product.price}
                </div>
                <div className="itemDetailContainer_Description">
                    {product.description}
                </div>

                { 
                    finalAmount === 0 ? 
                    
                        <ItemCountDetail item={product} cartList={cartList} setFinalAmount={setFinalAmount}/>
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
