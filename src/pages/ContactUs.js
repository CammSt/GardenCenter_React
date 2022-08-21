import React from 'react'
import Header from '../components/Header'

import '../styles/ContactUsStyle.css'
import '../styles/TitleStyle.css'

export default function ContactUs() {
    
    return (
        <div>
            <Header screenTitle={'CONTACTANOS'}/>

            <div>
                {/* <div className="titleContainer">
                    <h3 className="titleContainer__Text"> ¿TENÉS ALGUNA PREGUNTA? ESCRIBINOS</h3>
                </div> */}
                
                {/* <form className="messageForm">

                    <div className='formFirstRow'>
                        <div>
                            <label>
                                Nombre
                            </label> 
                            <input type="text" name="name" className="inputStyle" id="inputName"/>
                        </div>

                        <div>
                            <label>
                                Email
                            </label> 
                            <input type="text" name="email" className="form-control" id="inputEmail"/>
                        </div>
                    </div>

                    <div>
                        <label> Teléfono </label> 
                        <input type="text" name="phone" className="form-control" id="inputPhone"/>
                    </div>
                    
                    <label> Dejanos acá tu mensaje...</label>
                
                    <div>
                        <textarea className="form-control" name="message" value="" id="inputMessage" rows="5"></textarea>
                    </div>
            
                    <button type="submit" className="btn">ENVIAR CONSULTA</button>

                </form> */}

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
