import React, { useState, useEffect } from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'

import '../styles/ItemDetailContainerStyle.css'
import ItemDetail from './ItemDetail'
import Header from './Header'

import db from '../firebaseConfig.js'

export default function ItemDetailContainer() {

    const [ selectedProduct, setSelectedProduct] = useState([])
    const [ loading, setLoading ] = useState(true)

    let params = useParams()
    
    //recupera el listado de la bd y busca el elemento que corresonde al id del path
    const getOneProduct = async () => {

        setLoading(true)

        const productsCollection = collection(db,'productos')
            const productsSnapshot = await getDocs(productsCollection)

            const productsList = productsSnapshot.docs.map( item => {

                let product = item.data()
                product.id = item.id

                return product
            })

            let auxProduct = productsList.filter( element => element.id === params.id )

            setSelectedProduct(auxProduct[0])
            setLoading(false)
    }

    useEffect( () => {
        getOneProduct()
    }, [])

    return (
        <div className="detailContainer">
            { 
                loading ? 
                <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                : 

                <div>
                    <Header screenTitle={selectedProduct.name} />
                    <ItemDetail product={selectedProduct}/>
                </div>


            }
        </div>
    )
}
