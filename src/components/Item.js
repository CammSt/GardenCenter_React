import React from 'react'
import Swal from 'sweetalert2'

import '../styles/ItemStyle.css'
import ItemCount from './ItemCount'

export default function Item({item,cartList}) {

    const addToCart = (stock,amount) => {

        let repeatedObject = cartList.find( cartProduct => parseInt(cartProduct.id) === parseInt(item.id))

        if( !repeatedObject ) {

            if(amount === 0) return 

            let auxObj = {
                image: item.image,
                imageAlt: item.imageAlt,
                name: item.name,
                price: item.price,
                amount: amount,
                stock: stock,
                id: item.id
            }
            cartList.push(auxObj)

        } else {

            let indexOf = null

            cartList.forEach( (element,index) => {
                if( cartList[index].id === item.id ) {
                    indexOf = index
                    return
                }
            });

            if(amount === 0) {
                cartList.splice(indexOf,1)
                
                Swal.fire({
                    title: 'Se borró del carrito',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'bottom-end',
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#F7A25A',
                    color: 'white',
                    iconColor: 'white'
                })
                return
            }

            cartList[indexOf].amount = amount
            cartList[indexOf].stock = stock
        }
        
        Swal.fire({
            title: 'Agregado a carrito',
            icon: 'success',
            showConfirmButton: false,
            toast: true,
            position: 'bottom-end',
            timer: 3000,
            timerProgressBar: true,
            background: '#11b899',
            color: 'white',
            iconColor: 'white'
        })
    }


    return (
        <div className="newReleasesContainer_Item" >

            <div className="newReleasesContainer_Item_Image">
                <img src={item.image}  alt={item.imageAlt} />
                <div className="newReleasesContainer_NewText">
                    NUEVO
                </div> 
            </div>

            <div>
                <div className="newReleasesContainer_Name">
                    {item.name}
                </div>
                <div className="newReleasesContainer_Price">
                    {item.price}
                </div>
                <ItemCount item={item} addToCart={addToCart}/>
            </div>
            
        </div>
    )
}
