import React from 'react'
import '../styles/ItemListContainerStyle.css'

import NewShopItem from './NewShopItem'

export default function ItemListContainer({list,previousScreen,cartList}) {

    /* const shopItems = () => {
        return (
            <div></div>
        )
    }

    if(previousScreen === 'Home') {
        return (
            <div className="newReleasesContainer">
                { list.map( (item,index) => {
                    return (
                        <NewShopItem key={index} item={item} cartList={cartList}/>
                    )
                })}
            </div>
        )
    } else {
        shopItems()
    } */


    return (
        <div className="newReleasesContainer">
            { list.map( (item,index) => {
                return (
                    <NewShopItem key={index} item={item} cartList={cartList}/>
                )
            })}
        </div>
    )
}