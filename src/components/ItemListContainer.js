import React, { useState, useEffect } from 'react'

import '../styles/ItemListContainerStyle.css'
import ItemList from './ItemList'
import { newItems } from '../variables/newItems'

export default function ItemListContainer({cartList}) {

    const [ newProducts, setNewProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(newItems)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( response => setNewProducts(response) )
            .catch( e => console.log("Hubo un error", e) )
    }, [])

    return (
        <div className="newReleasesContainer">
            <ItemList cartList={cartList} productsList={newProducts}/>
        </div>
    )

}