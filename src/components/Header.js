import React from 'react'
import '../styles/HeaderStyle.css'

export default function Header({screenTitle}) {

    return (
        <div className="headerContainer">
            <img src={require('../assets/header_background_cropped.jpg')} className="img-fluid" alt="Header Background" width="100%" />
            <h1 className="headerContainer__Title">GARDEN CENTER</h1>
            <h2 className="headerContainer__BottomLeft">{screenTitle} -</h2>
        </div>
    )
}
