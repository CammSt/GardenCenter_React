import React from 'react'
import '../styles/ItemListContainerStyle.css'

import NewItem from './NewItem'

export default function ItemList({productsList}) {

    return (
        <div className="newReleasesContainer">
            { productsList.map( (item,index) => {
                return (
                    <NewItem key={index} item={item}/>
                )
            })}
        </div>
    )
}