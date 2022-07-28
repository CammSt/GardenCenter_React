import React, { useState, useEffect } from 'react'
import BounceLoader from "react-spinners/BounceLoader";

import '../styles/ItemDetailContainerStyle.css'
import ItemDetail from './ItemDetail'

import { newItems } from '../variables/newItems'

export default function ItemDetailContainer({cartList}) {

    const [ product, setProduct] = useState([])
    const [ loading, setLoading ] = useState(true)

    const getOneProduct = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(newItems[0])
        }, 2000)
    })

    useEffect( () => {

        getOneProduct
            .then( response => setProduct(response) )
            .catch( e => console.log("Hubo un error", e) )
            .finally( () => setLoading(false))

    }, [])

    return (
        <div className="newReleasesContainer">
            { 
                loading ? 
                <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                : 
                <ItemDetail cartList={cartList} product={product}/>

            }
        </div>
    )
}
