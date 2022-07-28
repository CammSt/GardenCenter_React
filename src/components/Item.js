import React from 'react'
import '../styles/ItemStyle.css'
import ItemCount from './ItemCount'

export default function Item({item,cartList}) {


    return (
        <div className="newReleasesContainer_Item" >

            <div className="newReleasesContainer_Item_Image">
                <img src={item.image}  alt={item.imageAlt} />
                <div className="newReleasesContainer_NewText">
                    NUEVO
                </div> 
            </div>

            <div>
                <div className="newReleasesContainer_Name">
                    {item.name}
                </div>
                <div className="newReleasesContainer_Price">
                    {item.price}
                </div>
                <ItemCount item={item} cartList={cartList}/>
            </div>
            
        </div>
    )
}
