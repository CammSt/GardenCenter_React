import React, { useState, useEffect } from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from 'react-router-dom';

import '../styles/ItemDetailContainerStyle.css'
import ItemDetail from './ItemDetail'
import Header from './Header'

import { items } from '../variables/items'

export default function ItemDetailContainer({cartList}) {

    const [ selectedProduct, setSelectedProduct] = useState([])
    const [ loading, setLoading ] = useState(true)

    let params = useParams()

    const getOneProduct = new Promise( (resolve, reject) => {
        setTimeout( () => {

            let auxProduct = items.filter( element => parseInt(element.id) === parseInt(params.id))
            resolve(auxProduct[0])

        }, 2000)
    })

    useEffect( () => {
        
        getOneProduct
            .then( response => setSelectedProduct(response) )
            .catch( e => console.log("Hubo un error", e) )
            .finally( () => setLoading(false))

    }, [])

    return (
        <div className="detailContainer">
            { 
                loading ? 
                <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                : 

                <div>
                    <Header screenTitle={selectedProduct.name} />
                    <ItemDetail cartList={cartList} product={selectedProduct}/>
                </div>


            }
        </div>
    )
}
