import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import '../styles/HomeStyle.css'
import Title from '../components/Title'
import Header from '../components/Header'
import PaymentMethod from '../components/PaymentMethod'
import { paymentMethods } from '../variables/paymentMethods'
import ItemListContainer from '../components/ItemListContainer'

export default function Home({cartList}) {

    const [ products, setProducts] = useState([])

    return (
        <div>
            <Header screenTitle={'HOME'} />
            <div className="goToShopContainer">
                <img src={require('../assets/home_background_cropped.jpg')} className="img-fluid" alt="Home Background"/>
                <h3 className="goToShopContainer__Title">VISITE NUESTRA TIENDA</h3>
                <Link className="goToShopContainer__Button" to={'/'}> <i className="fa-brands fa-envira"></i> IR A LA TIENDA</Link>
                
            </div>
        
            <hr/>

            <Title title={'METODOS DE PAGO Y ENVIOS'}/>
            
            <div className="paymentAndShippingContainer">
                { paymentMethods.map( (item,index) => {
                    return (
                        <PaymentMethod description={item.description} key={index} icon={item.icon}/>
                    )
                })}
            </div>
        
            <hr/>
        
            <Title title={'NUEVOS INGRESOS'}/>

            <ItemListContainer cartList={cartList} previousScreen={'home'} products={products} setProducts={setProducts}/>

        </div>
    )
}
