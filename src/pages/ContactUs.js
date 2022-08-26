import React from 'react'
import Header from '../components/Header'

import '../styles/ContactUsStyle.css'
import '../styles/TitleStyle.css'

export default function ContactUs() {
    
    return (
        <div>
            <Header screenTitle={'CONTACTANOS'}/>

            <div>
                <div className="titleContainer">
                    <h3 className="titleContainer__Text"> ¿TENÉS ALGUNA PREGUNTA? PODES PREGUNTARNOS POR NUESTRAS REDES SOCIALES</h3>
                </div>
                
                <div className="contactListContainer">
                    <a href="https://www.whatsapp.com" target="_blank" className="contactListContainer__Link">
                        <div className="contactListContainer__Link__Text">
                            Whatsapp: +54 11 22334455
                        </div>
                    </a>

                    <a href="https://www.facebook.com" target="_blank" className="contactListContainer__Link">
                        <div className="contactListContainer__Link__Text">
                            Facebook:   @garden_center
                        </div>
                    </a>

                    <a href="https://www.instagram.com" target="_blank" className="contactListContainer__Link">
                        <div className="contactListContainer__Link__Text"> 
                            Instagram:  @garden_center
                        </div>
                    </a>

                    <a href="https://www.gmail.com" target="_blank" className="contactListContainer__Link">
                        <div className="contactListContainer__Link__Text">
                            Email:  gardencenter@gmail.com
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
