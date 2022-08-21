import React from 'react'
import '../styles/Modal.css'

export default function Modal({title,close,children}) {
  return (
    <div className="modal-custom">
        <div className='modalHeader'>
            <h2>{title}</h2>
            <div onClick={() => close(false)}>X</div>
        </div>

        {children}
    </div>
  )
}
