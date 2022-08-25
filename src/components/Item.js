import React from 'react'
import { NavLink } from 'react-router-dom'
 
import '../styles/ItemStyle.css'
import ItemCount from './ItemCount'

export default function Item({item}) {

    return (
        <div className="newReleasesContainer_Item">
            <NavLink className="newReleasesContainer_Item_Image" to={`/item/${item.id}`} item={item}>
                { 
                    item.categoryId == 1 ?
                    
                    <img src={require('../assets/plantas_exterior/' + item.image)}  alt={item.imageAlt} />

                    :

                    <img src={require('../assets/plantas_interior/' + item.image)}  alt={item.imageAlt} />
                }
            </NavLink>

            <div>
                <NavLink className="newReleasesContainer_Name" to={`/item/${item.id}`} item={item}>
                    {item.name}
                </NavLink>
                <div className="newReleasesContainer_Price">
                    $ {item.price}
                </div>
                <ItemCount item={item}/>
            </div>
            
        </div>
    )
}
