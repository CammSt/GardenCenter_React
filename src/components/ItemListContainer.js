import React, { useState, useEffect } from 'react'
import BounceLoader from "react-spinners/BounceLoader";

import '../styles/ItemListContainerStyle.css'
import ItemList from './ItemList'
import NewItemList from './NewItemList'

import { newItems } from '../variables/newItems'
import { items } from '../variables/items'

export default function ItemListContainer({cartList,previousScreen,setProducts,products,categoryId, update}) {

    const [ loading, setLoading ] = useState(true)

    const getProducts = new Promise( (resolve, reject) => {

        setTimeout( () => {
            if(previousScreen === 'home') {
                resolve(newItems)
                
            } else if(previousScreen === 'shop') {
                resolve(items)
            }
        
        }, 2000)
    })

    const getFilteredProducts = new Promise( (resolve, reject) => {

        setTimeout( () => {

            if( categoryId != undefined ) {
                let auxList = items.filter( element => element.categoryId.toString() === categoryId.toString() )
    
                resolve(auxList)
            }
            
        }, 2000)
    })

    useEffect( () => {

        setLoading(true)

        if( categoryId != undefined) { 
            getFilteredProducts
                .then( response => setProducts(response) )
                .catch( e => console.log("Hubo un error", e) )
                .finally( () => setLoading(false))

        } else {
            getProducts
                .then( response => setProducts(response) )
                .catch( e => console.log("Hubo un error", e) )
                .finally( () => setLoading(false))
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