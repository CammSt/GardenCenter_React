import React, { useState} from 'react'
import Swal from 'sweetalert2'

import '../styles/ItemCountDetailStyle.css'


export default function ItemCountDetail({cartList,item}) {

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

	function addToCart () {
	
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
		
			<div className='addToCartDetailButton' onClick={() => addToCart() }>
				AGREGAR
			</div>
		</div>
	)
}
