import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'

import '../styles/ItemCountStyle.css'
import { CartContext } from '../contexts/CartContext'


export default function ItemCount({item}) {

	let cartContext = useContext(CartContext)

	const [ amount, setAmount ] = useState(0)
	const [ stock, setStock ] = useState(item.stock)
	
	const onSubtract = () => {
		if(amount > 0 ) {
			setAmount(amount - 1)
			setStock(stock + 1)
		}
	}

	const onAdd = () => {
		if( stock >= 1 ) {
			setAmount(amount + 1)
			setStock(stock - 1)
		}
	}

	return (
		<div >
			{
				stock === 0 ?
				<div className="newReleasesContainer_Stock">
					Sin stock
				</div>
				:
				<div className="newReleasesContainer_Stock">
					Stock disponible: {stock}
				</div>
			}
			
			<div className='countContainer'>
				<div onClick={onSubtract} className='subtractButton'>-</div>
				<div className='amountText'>{amount}</div>
				<div onClick={onAdd} className='addButton'>+</div>
			</div>
		
			<div className='addToCartButton' onClick={() => cartContext.addItem(item,amount,stock)}>
				AGREGAR
			</div>
		</div>
	)
}
