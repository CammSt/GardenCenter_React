import React from 'react'

import '../styles/ItemDetailStyle.css'
import ItemCountDetail from './ItemCountDetail'

export default function ItemDetail({cartList,product}) {


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

                <ItemCountDetail item={product} cartList={cartList}/>
            </div>
        </div>
    )
}
