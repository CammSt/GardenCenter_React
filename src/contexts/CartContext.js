import React, {createContext, useState} from 'react'
import Swal from 'sweetalert2'

const CartContext = createContext()

export default function CartProvider({children}) {
    
    const [ cartList, setCartList ] = useState([])
	const [ amount, setAmount] = useState(0)
	const [ totalPrice, setTotalPrice ] = useState(0)


	const getProductAmount = () => {
		let auxAmount = 0
		cartList.forEach( element => {
            auxAmount = auxAmount + element.amount
        });

		setAmount(auxAmount)
	}

    const removeItem = (element) => {

		let index = cartList.indexOf(element)

        cartList.splice(index,1)
				
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

		setCartList(cartList)

		getProductAmount()
		finalPrice()
        return
    }

    const emptyCart = () => {
        setCartList([])
		getProductAmount()
		finalPrice()
    }

    const addItem = (item,amount,stock) => {

        let cartListAux = cartList
	
		let repeatedObject = cartListAux.find( cartProduct => cartProduct.id === item.id )
	
		if( !repeatedObject ) {
			
			if(amount === 0) return 
	
			let auxObj = {
				image: item.image,
				imageAlt: item.imageAlt,
				name: item.name,
				price: item.price,
				categoryId: item.categoryId,
				amount: amount,
				stock: stock,
				id: item.id
			}
			cartListAux.push(auxObj)
	
		} else {
			let indexOf = null
	
			cartListAux.forEach( (element,index) => {
				if( cartListAux[index].id === item.id ) {
					indexOf = index
					return
				}
			})

	
			if(amount === 0) {
                removeItem(indexOf,cartListAux)
                return
			}

			cartListAux[indexOf].amount = amount
			cartListAux[indexOf].stock = stock
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
		setCartList([])
		setCartList(cartListAux)

		getProductAmount()
		finalPrice()
	}


	const finalPrice = () => {
		let auxPrice = 0
		cartList.forEach( element => {
            auxPrice = auxPrice + (element.price * element.amount)
        });

		setTotalPrice(auxPrice)
	}
    
    return (
        <CartContext.Provider value={{cartList,addItem,removeItem,emptyCart,amount,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext }