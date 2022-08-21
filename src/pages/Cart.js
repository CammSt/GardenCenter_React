import React,  { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import { CartContext } from '../contexts/CartContext';
import '../styles/CartStyle.css'
import '../styles/TitleStyle.css'
import Modal from '../components/Modal'

import db from '../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'

export default function Cart() {

    let cartContext = useContext(CartContext)
    let cartList = cartContext.cartList
    let amount = cartContext.amount
    let totalPrice = cartContext.totalPrice

    const [ showModal, setShowModal ] = useState(false)
    const [ orderId, setOrderID ] = useState()

    const [ order, setOrder ] = useState({
        items: cartList.map((product) => {
            return {
                id: product.id,
                title: product.name,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })
    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email:''
    })


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'orders')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setOrderID(orderDoc.id)
    }

    return (
        <div>
            <Header screenTitle={'TU COMPRA'}/>

            { cartList.length != 0  ?   
                <div>

                    <div className='goToPayInfoContainer'>
                        <div className='goToPayInfoContainer_Text'>Resumen del pedido</div>

                        <div className='goToPayInfoContainer_Amount'>
                            <div className='goToPayInfoContainer_Amount_Text'>CANTIDAD DE PRODUCTOS</div>
                            <div className='goToPayInfoContainer_Amount_Text'>{amount}</div>
                        </div>

                        <hr/>

                        { 
                            totalPrice >= 4999 ?
                                <div className='goToPayInfoContainer_Delivery'>
                                    <div className='goToPayInfoContainer_Delivery_Text'>ENVIO</div>
                                    <div className='goToPayInfoContainer_Delivery_Text'>GRATIS</div>
                                </div>
                            :
                                <div className='goToPayInfoContainer_Delivery'>
                                    <div className='goToPayInfoContainer_Delivery_Text'>ENVIO</div>
                                    <div className='goToPayInfoContainer_Delivery_Text'>$ 468</div>
                                </div>
                        }

                        <hr/>

                        <div className='goToPayInfoContainer_Price'>
                            <div className='goToPayInfoContainer_Price_Text'>TOTAL</div>
                            <div className='goToPayInfoContainer_Price_Text'>$ { totalPrice >= 4999 ? totalPrice : totalPrice+468 }</div>
                        </div>

                        <div className='goToPayButton' onClick={() => setShowModal(true)}>
                            <div>IR A PAGAR</div>
                        </div>
                    </div>

                    {
                        showModal && 

                        <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                            
                            {orderId ? 
                                <div>
                                    <div className='titleContainer'>
                                        <div className='titleContainer__Text'>Su orden se generó correctamente</div>
                                    </div>
                                    <p className='orderIdText'>ID de compra : {orderId}</p>
                                </div>
                             : 
                                <form onSubmit={submitData} className='contactInfoForm'>
                                    <input 
                                        required={true}
                                        type='text' 
                                        name='name' 
                                        placeholder='Ingrese el nombre'
                                        onChange={handleChange}
                                        value={formData.name}
                                        className='formDataInput'
                                    />

                                    <input 
                                        required={true}
                                        type='number' 
                                        name='phone' 
                                        placeholder='Ingrese el telefono' 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='formDataInput'
                                    />

                                    <input 
                                        required={true}
                                        type='email' 
                                        name='email' 
                                        placeholder='Ingrese el mail'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='formDataInput'
                                    />
                                    <button type="submit" className='submitButton'>Enviar</button>
                                </form>
                            }
                        </Modal>
                    }


                    <div className='cartContainer'>
                        {
                            cartList.map( (element,index) => {
                                return ( 
                                    <div className="itemContainer" key={index}>
    
                                        <div className='itemContentContainer'>
                                            <div className="itemContainer_Image">
                                                { 
                                                    element.categoryId == 1 ?
                                                    
                                                    <img src={require('../assets/plantas_exterior/' + element.image)}  alt={element.imageAlt} />
                                                    :
                                                    <img src={require('../assets/plantas_interior/' + element.image)}  alt={element.imageAlt} />
                                                }
                                            </div>
    
                                            <div>
                                                <div className="itemContainer_Text">
                                                    {element.name}
                                                </div>
                                                <div className="itemContainer_Text">
                                                    Valor : $ { element.price * element.amount }
                                                </div>
                                                <div className="itemContainer_Text">
                                                    Cantidad : { element.amount }
                                                </div>
                                            </div>
                                        </div>
    
                                        <FontAwesomeIcon icon={faTrashCan} className='deleteProductIcon' onClick={() => cartContext.removeItem(element)}/>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='emptyCartText' onClick={() => cartContext.emptyCart()}> VACIAR COMPRA </div>
                </div>

                : 

                <div className='emptyCartContainer'>
                    <div className='emptyCartContainer_Text'>  Carrito vacío</div>

                    <div className='titleContainer'> 
                        <Link to={'/'} className='titleContainer__Text emptyCartContainer_Redirect'>Puede agregar a su carrito en nuestra tienda </Link>
                    </div>

                </div>
            }
        </div>
    )
}
