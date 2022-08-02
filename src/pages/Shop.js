import React,{ useState } from 'react'

import Header from '../components/Header'
import ItemListContainer from '../components/ItemListContainer'
import Filters from '../components/Filters'


export default function Shop({cartList}) {

    const [ products, setProducts ] = useState([])
    const [ update, setUpdate ] = useState(false)

    

    return (
        <div>
            <Header screenTitle={'TIENDA'}/>
            <Filters setUpdate={setUpdate} update={update}/>
            
            <ItemListContainer cartList={cartList} previousScreen={'shop'} setProducts={setProducts} products={products} update={update}/>

        </div>
    )
}
