import React from 'react'
import './ItemListContainerStyle.css'

export default function ItemListContainer({greeting}) {

    return (

        <div className='greetingTitle'>
            {greeting}
        </div>
    )
}
