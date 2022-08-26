import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";
import { collection, getDocs } from 'firebase/firestore'

import '../styles/ItemListContainerStyle.css'
import ItemList from './ItemList'
import NewItemList from './NewItemList'

import db from '../firebaseConfig.js'

export default function ItemListContainer({previousScreen,setProducts,products, update}) {

    const [ loading, setLoading ] = useState(true)

    let params = useParams()

    let categoryId = params.categoryId

    //recupera el listado de la bd y devuelve el listado correspondiente a la screen ( home o shop )
    const getProducts = async () => {

        const productsCollection = collection(db,'productos')
        const productsSnapshot = await getDocs(productsCollection)
        
        const productsList = productsSnapshot.docs.map( item => {
            
            let product = item.data()
            product.id = item.id

            return product
        })

        if( previousScreen === 'home') {
            let firstProduct = productsList.shift()
            let secondProduct = productsList.shift()
            let thirdProduct = productsList.shift()
            let forthProduct = productsList.shift()

            let auxArray = [ firstProduct, secondProduct, thirdProduct, forthProduct]
            setProducts(auxArray)


        } else {
            setProducts(productsList)
        }
        setLoading(false)
    }


    //recupera el listado de la bd y filtra segun el id de la categoria del path
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

        //si no es undefined es porque se selecciono una categoria
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
                    <NewItemList productsList={products}/>
    
                : 

                loading ? 
                    <BounceLoader color={'teal'} loading={loading} size={150} className='loader'/>
                    :
                    <ItemList productsList={products}/>
            }
        </div>
    )

}