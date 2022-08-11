import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'

import '../styles/ItemCountDetailStyle.css'
import { CartContext } from '../contexts/CartContext'


export default function ItemCountDetail({item}) {

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
				<div className="stock">
					Sin stock
				</div>
				:
				<div className="stock">
					Stock disponible: {stock}
				</div>
			}
			
			<div className='detailCountContainer'>
				<div onClick={onSubtract} className='detailCountContainer__SubtractButton'>-</div>
				<div className='detailCountContainer__Amount'>{amount}</div>
				<div onClick={onAdd} className='detailCountContainer__AddButton'>+</div>
			</div>
		
			<div className='addToCartDetailButton' onClick={() => cartContext.addItem(item,amount,stock)}>
				AGREGAR
			</div>
		</div>
	)
}
