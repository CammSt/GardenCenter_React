import React from 'react'

import '../styles/HomeStyle.css'
import Title from '../components/Title'
import PaymentMethod from '../components/PaymentMethod'
import { paymentMethods } from '../variables/paymentMethods'

export default function Home() {

    return (
        <div>
            <div className="goToShopContainer">
                <img src={require('../assets/home_background_cropped.jpg')} className="img-fluid" alt="Home Background"/>
                <h3 className="goToShopContainer__Title">VISITE NUESTRA TIENDA</h3>
                <button className="goToShopContainer__Button"> <i className="fa-brands fa-envira"></i> IR A LA TIENDA</button>
                
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
        </div>
    )
}
