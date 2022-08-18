import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";
import { collection, getDocs } from 'firebase/firestore'

import '../styles/ItemListContainerStyle.css'
import ItemList from './ItemList'
import NewItemList from './NewItemList'

import db from '../firebaseConfig.js'

export default function ItemListContainer({cartList,previousScreen,setProducts,products, update}) {

    const [ loading, setLoading ] = useState(true)

    let params = useParams()

    let categoryId = params.categoryId

    const getProducts = async () => {

        if(previousScreen === 'home') {
            const newProductsCollection = collection(db,'newProducts')
            const newProductsSnapshot = await getDocs(newProductsCollection)

            const productsList = newProductsSnapshot.docs.map( item => {
                
                let product = item.data()
                product.id = item.id

                return product
            })
            
            setProducts(productsList)
            
        } else if(previousScreen === 'shop') {
            const productsCollection = collection(db,'productos')
            const productsSnapshot = await getDocs(productsCollection)
            
            const productsList = productsSnapshot.docs.map( item => {
                
                let product = item.data()
                product.id = item.id

                return product
            })
            setProducts(productsList)
        }

        setLoading(false)
    }

    const getFilteredProducts = async () => {
        const productsCollection = collection(db,'productos')
        const productsSnapshot = await getDocs(productsCollection)

        const productsList = productsSnapshot.docs.map( item => {
                
            let product = item.data()
            product.id = item.id

            return product
        })

        if( categoryId !== undefined ) {
            let auxList = productsList.filter( element => element.categoryId.toString() === categoryId.toString() )
            setProducts(auxList)
        }

        setLoading(false)
    }

    useEffect( () => {

        setLoading(true)

        if( categoryId !== undefined) { 
            getFilteredProducts()
        } else {
            getProducts()
        }


    }, [update])

    return (
        <div className="newReleasesContainer">
            {   
                previousScreen === 'home' ? 
    
                    loading ? 
                    <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                    :
                    <NewItemList cartList={cartList} productsList={products}/>
    
                : 

                loading ? 
                    <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                    :
                    <ItemList cartList={cartList} productsList={products}/>
            }
        </div>
    )

}