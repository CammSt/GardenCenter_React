import React from 'react'
import '../styles/ItemListContainerStyle.css'

import Item from './Item'

export default function ItemList({productsList}) {

    return (
        <div className="newReleasesContainer">
            { productsList.map( (item,index) => {
                return (
                    <Item key={index} item={item}/>
                )
            })}
        </div>
    )
}