import React, { useState, useEffect } from 'react'
import BounceLoader from "react-spinners/BounceLoader";

import '../styles/ItemListContainerStyle.css'
import ItemList from './ItemList'
import { newItems } from '../variables/newItems'

export default function ItemListContainer({cartList}) {

    const [ newProducts, setNewProducts] = useState([])
    const [ loading, setLoading ] = useState(true)

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(newItems)
        }, 2000)
    })

    useEffect( () => {

        getProducts
            .then( response => setNewProducts(response) )
            .catch( e => console.log("Hubo un error", e) )
            .finally( () => setLoading(false))

    }, [])

    return (
        <div className="newReleasesContainer">
            { 
                loading ? 
                <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                : 
                <ItemList cartList={cartList} productsList={newProducts}/>

            }
        </div>
    )

}