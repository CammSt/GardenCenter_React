import React from 'react'

import '../styles/FiltersStyle.css'
import { NavLink } from 'react-router-dom'

export default function Filters({setUpdate,update}) {

    let exterior = 1
    let interior = 2

    return (

        <div className='filtersContainer'>

            <ul className='filters'>
                <li className='filterItem' onClick={() => setUpdate(!update)}> 
                    <NavLink className='filterItem__Title' to={`/category/${interior}`}>PLANTAS INTERIOR</NavLink> 
                </li>
                <li className='filterItem' onClick={() => setUpdate(!update)}> 
                    <NavLink className='filterItem__Title' to={`/category/${exterior}`}>PLANTAS EXTERIOR</NavLink> 
                </li>
            </ul>  

        </div>

    )
}
